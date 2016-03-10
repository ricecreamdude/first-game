var angular = require('angular');

describe('User Auth Service Test' , () => {

  var $httpBackend;
  var userAuth;
  var $window;
  //testAuth??
  //Set up test variables
  beforeEach( angular.mock.module('gameApp') );
  beforeEach( angular.mock.inject( function( _$httpBackend_ , userAuth , _$window_ ) {
    $httpBackend = _$httpBackend_;
    userAuth = userAuth;
    $window = _$window_;
    //testAuth??

  }));

  //Promises Cleaning
  afterEach( () => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('valid POST to /createUser should create a token' , () => {
    userAuth.createUser(user, callback);
  });

  it('valid POST to /signIn should create a token' , () => {
    userAuth.signIn(user, callback);
  });

  it('should return a token when calling .getToken' , () => {
    userAuth.getToken();
  });

  it('should change token and user info when calling .signOut' , () => {
    userAuth.signOut();
  });

  it('should return a function when calling .getUserName' , () => {
    userAuth.getUserName(callback);
  });

  it('should return a user when calling .username' , () => {
    userAuth.username();
  });
});
