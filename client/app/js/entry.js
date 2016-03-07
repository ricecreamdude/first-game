module.exports = require('angular');
require('angular-route');
const gameApp = angular.module('gameApp', ['ngRoute']);

// require('./services')(gameApp);
require('./auth')(gameApp);

gameApp.config(['$routeProvider', function(routes) {
  routes
    .when('/', {
      controller: 'SignupController',
      templateUrl: '/views/sign_up_in_view.html'
    })
    .otherwise({
      templateUrl: '/views/four_oh_four.html'
    });
}]);
