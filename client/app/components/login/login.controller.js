class LoginController {

/*@ngInject*/ //Needed when minifying the javascript
  constructor($http) {
    this.name = 'login';
    this._http = $http;
   // this.clientId = clientId;
  }

  $onInit() {

      this.userName = "";
      this.password = "";
      this.response = "";
      this.user = "";

  }
  updateUser() {
    this.user = this.response.username;
  }

  login() {
  var self = this;
      this._http.get("/login?name=" + this.userName + "&password=" + this.password +"").then(function(response) {
        self.response = response.data;
        self.updateUser();
      });
  }


}

export default LoginController;




