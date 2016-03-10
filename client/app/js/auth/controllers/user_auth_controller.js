module.exports = function(app) {
  app.controller('userAuthController', ['$scope', 'userAuth', '$window', function($scope, userAuth , $window) {
    $scope.username = null;
    $scope.token = $window.localStorage.token;

    $scope.updateUsername = function() {
      userAuth.getUsername( $scope.token , function(res){
        console.log(res);
        $scope.username = res.data.username;
      });
    };

    $scope.logout = function() {
      $scope.token = $window.localStorage.token = null;
      $scope.username = null;
    };
  }]);
};
