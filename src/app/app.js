import angular from 'angular';
import "@uirouter/angularjs";
import 'oclazyload';

import homeCtrl from '../app/home';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.hello = "Hello world";
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

class heloController {

};

class aboutController {
  
};
const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router','oc.lazyLoad'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller('heloController',heloController)
  .controller('aboutController',aboutController)
  .controller('homeCtrl',homeCtrl)
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('helo',{
        url:"/helo",
        template:'<h3> This is bunkers </h3>',
        controller:'heloController'
      })
      .state('about',{
        url:"/about",
        template:'<h3>About page </h3>',
        controller:'aboutController'
      })
      .state('home',{
        url:"/home",
        template: require('../app/view/home.html'),
        controller:'homeCtrl',
        controllerAs:'home'
      });
      $urlRouterProvider.otherwise('/');
  }])

export default MODULE_NAME;