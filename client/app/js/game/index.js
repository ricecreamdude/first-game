module.exports = function(app) {
  require('./controllers/game_controller')(app);
  require('./controllers/modals_controller')(app);

  require('./directives/modals_directive')(app);
};
