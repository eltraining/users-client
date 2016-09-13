class HomeController {

  /*@ngInject*/
  constructor($http) {
    this.name = 'home';
    this._http = $http;
  }

  $onInit() {
    this._http.get('/login?name=test&password=Babst&group=ELCA').then(response => {
      this._greeting = response.data;
    });
  }

  get greeting() { return this._greeting; }

}

export default HomeController;




