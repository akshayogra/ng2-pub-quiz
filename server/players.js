module.exports.listen = function (app, state) {
  app.post('/players', function (req, res) {
    var player = state.add(Object.create(Player).newPlayer(req.body.name)).to('players');
    var game = state.get(req.body.gameId).from('games');
    game.addPlayer(player);
    res.send(player);
  });
}
var Player = {
  newPlayer: function (name){
    this.name = name;
    return this;
  },
  addScore: function(addedScore){
    this.score += addedScore
  },
  score: 0,
}
