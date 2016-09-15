class CreateController {

/*@ngInject*/ //Needed when minifying the javascript
  constructor($http) {
    this.name = 'create';
    this._http = $http;
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
      });
  }
}

export default CreateController;




