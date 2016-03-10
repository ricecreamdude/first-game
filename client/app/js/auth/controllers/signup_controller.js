module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$location', 'userAuth', '$window', function($scope, $location, auth , $window) {
    $scope.signup = true;
    $scope.userExists = null;
    $scope.token;

    $scope.submit = function(user) {
      auth.createUser(user, function(err, res) {
        if (err) {
          $scope.userExists = true;
          return console.log(err);
        }
        $scope.token = $window.localStorage.token = res.data.token;
        $location.path('/game');
      });
    };
  }]);
};
