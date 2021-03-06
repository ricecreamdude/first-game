var angular = require('angular');

describe('Auth controller', () => {
  var $httpBackend;
  var $scope;
  var $ControllerConstructor;
  var user;

  beforeEach(angular.mock.module('gameApp'));

  beforeEach(angular.mock.inject(($rootScope, $controller) => {
    $ControllerConstructor = $controller;
    $scope = $rootScope.$new();
  }));

  it('should be able to make a signin controller', () => {
    var authController = $ControllerConstructor('authController', {$scope});
    expect(typeof authController).toBe('object');

    expect(typeof $scope.updateUsername).toBe('function');
  });

  describe('REST requests', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $ControllerConstructor('authController', {$scope});
    }));

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a get request to /api/currentuser and receive an error', () => {
      var user = {
        username: 'testuser'
      };

      $httpBackend.expectGET('http://localhost:3000/api/currentuser').respond(200, user);
      $scope.updateUsername();
      $httpBackend.flush();
      expect($scope.username).toBe('testuser');
    });

    // it('should make a get request to /api/signin', () => {
    //
    //   $httpBackend.expectGET('http://localhost:3000/api/currentuser').respond(200, user);
    //   $scope.submit(user);
    //   $httpBackend.flush();
    //   expect($scope.userWrong).toBe(null);
    // });
  });

});
