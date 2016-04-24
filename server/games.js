module.exports.intialize = function (app, state, gameCycle) {

  //This starts the first game in 10 seconds
  setTimeout(function(){
    state.db.games[0].start();
    console.log('starting first game');
  }, 2000);

  // This route is for getting a list of games
  app.get('/games', function (req, res) {
    res.send(state.db.games);
  });

  //This route is for starting a game
  app.get('/start/:id', function(req, res){
    state.db.games.forEach(function(game) {
      if(game.id == req.params.id){
        game.start();
        res.sendStatus(200);
      }
      res.sendStatus(404);
    });
  });

  function instantiateGames(gamesData) {
    gamesData.forEach(function(gameData) {
      state.add(Object.create(Game).newGame(gameData)).to('games');
    })
  }

  var gamesData = [{
    id: 1,
   name: 'Who Wants to Observe a Millionaire',
   questions: [
     {
       id: 1,
       question: 'How many licks does it take to get to the center of a Tootsie Roll',
       answers: [ 'Two thousand', 'One.. two.. crunch!', 'Egg', 'Zebra' ],
       rightAnswerIndex: 1
     }
   ]
  }];

  var Game = {
    newGame: function (gameData){
      this.name = gameData.name;
      this.questions = gameData.questions;
      this.players = [];
      this.started = false;
      return this;
    },
    start: function() {
      this.started = true;
      gameCycle.startGame(this);
    },
    addPlayer: function(player) {
      this.players.push(player);
    }
  }

  //This adds a hardcoded list of games to the state
  instantiateGames(gamesData);
}
