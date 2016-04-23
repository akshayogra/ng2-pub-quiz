

function Quiz(http, app) {

  var answer = require('./answer')(app);
  var state = require('./state')();
  var games = require('./games')(app, state);


  function Player (name) {
    this.name = name;
    this.score = 0;
    game.players.push(this);
  }

  var io = require('socket.io')(http);
  io.on('connection', function(socket){
    console.log('a user connected');
  });

}

module.exports = Quiz;
