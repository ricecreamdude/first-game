angular.module('myApp',[])
  .controller('myCtrlr',['$scope',function($scope){
   $scope.showSignin = true;
   $scope.showSignup = true;

   $scope.toggleSignin = function(){
      $scope.showSignin = !$scope.showSignin;
   };
   $scope.toggleSignup = function(){
      $scope.showSignup = !$scope.showSignup;
   };
  }]);
