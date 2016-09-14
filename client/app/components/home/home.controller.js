class HomeController {

  /*@ngInject*/ //Needed when minifying the javascript
  constructor($http) {
    this.name = 'home';
    this._http = $http;
  }

  $onInit() {
    this._http.get('/login?name=test&password=Babst&group=ELCA').then(response => {
      this._greeting = response.data;
      this.userName = "";
      this.password = "";
      this.response = "";
    });
  }

  get greeting() { return this._greeting; }

  login() {
  var self = this;
      this._http.get("/login?name=" + this.userName + "&password=" + this.password +"").then(function(response) {
        self.response = response.data;
      });
  }

}

export default HomeController;




