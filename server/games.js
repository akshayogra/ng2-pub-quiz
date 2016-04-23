module.exports  = function (app, state) {
  console.log('state', state);
  // This route is for getting a list of games
  app.get('/games', function (req, res) {
    res.send(state.games);
  });

  //Starting route for games
  app.get('/start/:id', function(req, res){
      var matchingGames = state.games.filter(function(game){
        return game.id == req.params.id;
      });
      if(matchingGames.length > 0){
        matchingGames[0].started = true;
      } else {
        res.send(404);
      }
      res.send(state);
  });


}
