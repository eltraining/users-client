class HomeController {

  /*@ngInject*/
  constructor($http, $httpParamSerializer) {
    this.name = 'home2';

    this._bla= "come on"

    this._http = $http;
    this._httpParamSerializer = $httpParamSerializer;

  }

  $onInit() {
//     let params = this._httpParamSerializer({
//      name: 'test',
//      password: 'Babst',
//      group: 'ELCA'
//     });
     this._http.get('/login').then(response => {
        this._bla= response.data;
        });
  }

  get bla() { return this._bla; }
  set bla(s) { this._bla = s; }

}

export default HomeController;




