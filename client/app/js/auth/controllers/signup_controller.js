module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$location', 'userAuth', '$window', function($scope, $location, Auth , $window) {
    $scope.signup = true;
    $scope.userExists = null;
    $scope.token;

    var authService = Auth('/signup');

    $scope.submit = function(user) {
      userAuth.createUser(user, function(err, res) {
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
