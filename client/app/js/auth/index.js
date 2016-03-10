module.exports = function(app) {
  require('./services/user_auth_services')(app);
  require('./controllers/signup_controller')(app);
  require('./controllers/signin_controller')(app);
  require('./controllers/user_auth_controller')(app);
};
