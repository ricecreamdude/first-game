var handleSuccess = function(callback) {
  return function(res) {
    callback(null, res.data);
  };
};
var handleFailure = function(callback) {
  return function(res) {
    callback(res);
  };
};
module.exports = exports = function(app) {
  app.factory('userAuth', ['$http', function($http) {

    var Auth = function(authName) {
      this.name = authName;
    };

    Auth.prototype.createUser = function(data, callback){
      $http.post('http://localhost:3000/api/signup', user)
      .then(handleSuccess(callback) , handleFailure(callback));
    };
    Auth.prototype.signIn = function(data, callback){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/signin',
        headers: {
          'Authorization': 'Basic ' + btoa((data.email + ':' + data.password))
        }
      }).then(handleSuccess(callback) , handleFailure(callback));
    };
    Auth.prototype.getUsername = function(tokenData , callback){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/currentuser',
        headers: { token: tokenData }
      }).then(handleSuccess(callback) , handleFailure(callback));
    };

    return function(authName){
      return new Auth(authName);
    };

  }]);
};
    //
    // var token;
    // var user;
    // var auth = {
    //
    //   createUser: function(user, callback) {
    //     callback = callback || function() {};
    //     $http.post('http://localhost:3000/api/signup', user)
    //     .then(function(res) {
    //       //Receives server data and applies it
    //       //Success
    //       token = $window.localStorage.token = res.data.token;
    //       callback(null, res);
    //     }, function(res) {
    //       //Failure
    //       callback(res)
    //     });
    //   },
    //
    //   signIn: function(user, callback) {
    //     callback = callback || function() {};
    //     $http({
    //       method: 'GET',
    //       url: 'http://localhost:3000/api/signin',
    //       headers: {
    //         'Authorization': 'Basic ' + btoa((user.email + ':' + user.password))
    //       }
    //     })
    //     .then(function(res) {
    //       token = $window.localStorage.token = res.data.token;
    //       callback(null, res);
    //     }, function(res) {
    //       callback(res);
    //     });;
    //   },
    //   getUsername: function(callback) {
    //     callback = callback || function() {};
    //     $http({
    //       method: 'GET',
    //       url: 'http://localhost:3000/api/currentuser',
    //       headers: {
    //         token: auth.getToken()
    //       }
    //     })
    //     .then(function(res) {
    //       user = res.data.username;
    //       callback(res);
    //     }, function(res) {
    //       callback(res);
    //     });
    //   },
    //
    //   //Not really
    //   getToken: function() {
    //     token = token || $window.localStorage.token;
    //     return token;
    //   },
    //
    //   signOut: function(callback) {
    //     $window.localStorage.token = null;
    //     token = null;
    //     user = null;
    //     if(callback) callback();
    //   },
    //   username: function() {
    //     if(!user) auth.getUsername();
    //     return user;
    //   }
    // }; //End of auth object
    // return auth;
