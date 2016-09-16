class CreateController {

/*@ngInject*/ //Needed when minifying the javascript
  constructor($http, $state) {
    this.name = 'create';
    this._http = $http;
    this._state = $state;
  }

  $onInit() {

      this.userName = "";
      this.password = "";
      this.group = "";
      this.response = "";

  }


  create() {
  var self = this;
      this._http.get("/create?name=" + this.userName + "&password=" + this.password +"" + "&group=" + this.group).then(function(response) {
        self.response = response.data;
        if(response.data.ok == true){
          //navigate to login
          self.name = "Created account under name " + self.userName;
           //navigate to logged in

           //angular.window.alert("Account created"); TODO make alert that account was created!
           self._state.go('login');
         }
         else {
          self.name = "Account creation unsuccessful!";
          }

      });
  }
}

export default CreateController;




