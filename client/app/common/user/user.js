import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('user', [])

//TODO why not use the Servie Recipe?
.factory('User', UserFactory)
  
.name;

export default userModule;
