module.exports = function(app) {
  app.controller('SigninController', ['$scope', 'userAuth', '$location', '$window', function($scope, userAuth, $location , $window) {
    $scope.signin = true;
    $scope.userWrong = null;
    $scope.token;

    $scope.submit = function(user) {
      userAuth.signIn(user, function(err, res) {
        if(err) {
          $scope.userWrong = true;
          return console.log(err);
        }
        $scope.token = $window.localStorage.token = res.data.token;
        $location.path('/game');
      });
    };
  }]);
};
