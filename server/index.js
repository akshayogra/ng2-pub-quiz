

function Quiz(http, app) {
  var state = require('./state');
  var games = require('./games');
  var players = require('./players');

  games.intialize(app,state);
  players.listen(app,state)

  var io = require('socket.io')(http);
  io.on('connection', function(socket) {
    console.log('a user connected');
  });

}

module.exports = Quiz;
