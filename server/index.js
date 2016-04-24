

function Quiz(http, app) {
  var io = require('socket.io')(http);
  var state = require('./state');
  var games = require('./games');
  var players = require('./players');
  var gameCycle = require('./game-cycle');

  gameCycle.config(io);

  games.intialize(app,state,gameCycle);
  players.listen(app,state)


  io.on('connection', function(socket) {
    console.log('a user connected');
  });

}

module.exports = Quiz;
