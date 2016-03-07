module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$location', 'userAuth', function($scope, $location, auth) {
    $scope.signup = true;
    $scope.submit = function(user) {
      auth.createUser(user, function() {
        $scope.updateUsername();
        $location.path('/dashboard');
      });
    };
  }]);




  app.controller('SignupController',['$scope',function($scope){
   $scope.showSignin = true;
   $scope.showSignup = true;

   $scope.toggleSignin = function(){
      $scope.showSignin = !$scope.showSignin;
   };
   $scope.toggleSignup = function(){
      $scope.showSignup = !$scope.showSignup;
   };
}]);
};
