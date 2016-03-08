const angular = require('angular');
require('angular-route');
require('angular-animate');
const gameApp = angular.module('gameApp', ['ngRoute', 'ngAnimate']);

require('./services')(gameApp);
require('./game')(gameApp);
require('./auth')(gameApp);

gameApp.config(['$routeProvider', function(routes) {
  routes
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
    .otherwise({
      templateUrl: '/views/four_oh_four.html'
    });
}]);
