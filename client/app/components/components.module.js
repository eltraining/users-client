import angular from 'angular';
import Home from './home/home.module';
import About from './about/about.module';
import Login from './login/login.module';
import Create from './create/create.module';




let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  Create
])
  
.name;

export default componentModule;
