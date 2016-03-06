//Tests for Authorization
const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;

//Load DB Model
var User = require(__dirname + '/../models/user');
// Load Server
require( __dirname + '/../server');
var HOST = 'localhost:3000';
//Set Up Test Database
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost:/game_test_integration';

describe('Public Routes' , () => {

  //Create Test User
  before( (done) => {
    var testUser = new User();
    testUser.username = 'publicRouteTest';
    testUser.authentication.email = 'public@email.com';
    testUser.hashPassword('publicRoute');
    testUser.save( (err , data) => {
      if (err) return console.log('Error on creating test profile');
      done();
    });
  });

  after( (done) => {
    mongoose.connection.db.dropDatabase( () => {} );
    done();
  })

  it('should reply to a valid GET request with a username' , (done) => {

    var id = {user: {id: 1}, body: {}};
    console.log('Hello from source');
    User.find( {username: 'publicRouteTest'}, '._id' , (err , foundUser) => {
      console.log('Hello from User')
      if (err) return handleDBError;
      id.user.id = foundUser._id;
    });
    request(HOST)
      .get('/api/currentuser')
      .set('body' , id)
      .end( (err, res) => {
        console.log('Hello from inside Get')
        expect(res.status).to.eql(200);
        expect(res.username).to.eql('publicRouteTest');

        console.log(res.msg);
        done();
      });



  });
});
