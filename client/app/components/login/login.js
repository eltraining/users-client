import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let loginModule = angular.module('login', [
  uiRouter
])
//resolve confligt: uiRouter + ngRouter; rename modules .module
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
