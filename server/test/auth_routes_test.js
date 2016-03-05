//Tests for Authorization
const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const jwt = require('jsonwebtoken');

//Load DB Model
var Profile = require(__dirname + '/../models/user');
//Load Server
require( __dirname + '/../server');

//Set Up Test Database
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost:/game_test_integration';

//Route Stuff
var HOST = 'localhost:3000';

describe('Auth Route Tests' , () => {

  //Erase DB once tests are ended
  after( (done) => {
    mongoose.connection.db.dropDatabase( () => {} );
    done();
  });

   it('SUCCESS: POST to /signup should generate a token' , (done) => {
    var testProfile = {
      username: 'MerlinMan',
      email: 'ArthurIsDumb@camelot.com',
      password: 'Lance1233123'
    };
    request(HOST)
      .post('/api/signup')
      .send( testProfile )
      .end( (err , res) => {
        expect( res.status ).to.eql(200);
        expect( res.body.token ).to.exist;
        done();
      });
  });

  it('ERROR: POST to /signup should respond error to bad data' , (done) => {

    var testProfile = {
      username: 'Mer',
      email: 'xXArthurIsDumbXx@camelot.com',
      password: 'L'
    };

    request(HOST)
      .post('/api/signup')
      .send(testProfile)
      .end( (err , res) => {
        expect( res.status ).to.eql(400);
        done();
      });
  });

  // describe('GET to /signin should generate a token'){
  //
  //     // res.json({token: user.generateToken()});
  // }

});
