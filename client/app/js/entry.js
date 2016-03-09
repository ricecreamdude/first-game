const angular = require('angular');
require('angular-route');

//Used to run game.js
require('oclazyload');
require('angular-local-storage');
//Animations
require('angular-animate');

const gameApp = angular.module('gameApp', ['ngRoute' , 'oc.lazyLoad', 'LocalStorageModule' , 'ngAnimate']);

// require('./services')(gameApp);

require('./auth')(gameApp);
require('./game')(gameApp);



gameApp.config(['$ocLazyLoadProvider' , '$routeProvider', 'localStorageServiceProvider', function ($ocLazyLoadProvider, $routeProvider ,localStorageServiceProvider) {

  $ocLazyLoadProvider.config({
    loadedModules: ['gameApp'], modules: [
      {
        name: 'displayGame',
        files: ['game.js']
      }
    ]
  });

  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/modal', {
      controller: 'GameController',
      templateUrl: '/views/menu_modal_view.html'
    })
    .when('/signup', {
      controller: 'SignupController',
      templateUrl: '/views/sign_up_in_view.html'
    })
    .when('/signin', {
      controller: 'SigninController',
      templateUrl: '/views/sign_up_in_view.html'
    })
    .when('/game' , {
      templateUrl: '/views/game_main.html',
      controller: 'GameController',
      resolve: {
      loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load('displayGame');
      }]
      }
    })
    .otherwise({
      templateUrl: '/views/four_oh_four.html'
    });//end

}]);

//Source of Solution: http://stackoverflow.com/questions/29468522/angular-controller-not-loading-using-oclazyload-and-ngroute
