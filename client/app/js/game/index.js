module.exports = function(app){

  //Controllers
  require( __dirname + '/controllers/game_controller')(app);
  require( __dirname + '/controllers/modals_controller')(app);
  //Directives
  require( __dirname + '/directives/game_menu_directive')(app);
  require( __dirname + '/directives/game_over_directive')(app);
  require( __dirname + '/directives/modals_directive')(app);

}
