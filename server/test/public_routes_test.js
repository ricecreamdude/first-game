//Tests for Authorization
const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const jwtAuth = require( __dirname + "/../lib/jwt_auth");
// Load Server
require( __dirname + '/../server');
var HOST = 'localhost:3000';
//Set Up Test Database
var User = require(__dirname + '/../models/user');
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost:/game_test_integration';

describe('Public Routes' , () => {

  //Create Test User
  before( (done) => {
    var testUser = new User();
    testUser.username = 'publicRouteName';
    testUser.authentication.email = 'public@email.com';
    testUser.hashPassword('testPass');
    this.token = testUser.generateToken();
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
    //Authentication is failing through jwt_auth
    request(HOST)
      .get('/api/currentuser')
      .set('token' , this.token)
      // .auth('publicRouteName','testPass')
      .end( (err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body.username).to.eql('publicRouteName');
        done();
      });
  });
});
