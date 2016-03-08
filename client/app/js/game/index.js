module.exports = function(app){

  //Controllers
  require( __dirname + '/controllers/game_controller')(app);
  //Directives
  require( __dirname + '/directives/game_display_directive.js')(app);
  require( __dirname + '/directives/game_menu_directive.js')(app);
  require( __dirname + '/directives/game_over_directive.js')(app);

}
