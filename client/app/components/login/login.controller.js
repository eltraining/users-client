//import angular from 'angular';
class LoginController {

/*@ngInject*/ //Needed when minifying the javascript
  constructor($http, movieTitle, userFactory) {
    this.name = "";
    this._http = $http;
    this.userFactory = userFactory;

  }

  $onInit() {

      this.userName = "";
      this.password = "";
  }

  login() {
  var self = this;
      this._http.get("/login?name=" + this.userName + "&password=" + this.password +"").then(function(response) {
        self.userFactory.updateUser(self.userName, response.data.ok);
         if(self.userFactory.isSignedIn() == true){
         self.name = "Logged in under " + self.userName + self.userFactory.isSignedIn();
          //navigate to logged in
        }
        else {
         self.name = "NOT logged in";
         }
      });
  }
}

export default LoginController;




