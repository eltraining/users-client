class LoginController {

  constructor($http) {
    this.name = 'login';
    this._http = $http;
  }

  $onInit() {

      this.userName = "";
      this.password = "";
      this.response = "";

  }


  login() {
  var self = this;
      this._http.get("/login?name=" + this.userName + "&password=" + this.password +"").then(function(response) {
        self.response = response.data;
      });
  }
}

export default LoginController;




