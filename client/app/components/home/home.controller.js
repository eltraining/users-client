class HomeController {

  /*@ngInject*/
  constructor($http) {
    this.name = 'home';
    this._http = $http;
  }

  $onInit() {
    this._http.get('/greeting').then(response => {
      this._greeting = response.data;
    });
  }

  get greeting() { return this._greeting; }

}

export default HomeController;
