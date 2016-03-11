module.exports = function(app) {

  //services
  require('./services/user_auth_services')(app);

  //controllers
  require('./controllers/signup_controller')(app);
  require('./controllers/signin_controller')(app);
  require('./controllers/auth_controller')(app);


};
