var state = {
  // the games that are running
  games: [];
};

function Quiz(http, app) {


  var answer = require('./answer')(app);


  app.get('/games', function (req, res) {
    res.send(state.games);
  });

  var game = {
    id: 1,
    name: 'Who Wants to Observe a Millionaire',
    // game is waiting for player
    started: false,
    questions: [
      {
        id: 1,
        question: 'How many licks does it take to get to the center of a Tootsie Roll',
        answers: [ 'Two thousand', 'One.. two.. crunch!', 'Egg', 'Zebra' ],
        rightAnswerIndex: 1
      }
    ],
    players: []
  }

  function Player (name) {
    this.name = name;
    this.score = 0;
    game.players.push(this);
  }


  var io = require('socket.io')(http);
  io.on('connection', function(socket){
    console.log('a user connected');
  });

  // setInterval(function () {
  //   console.log('sending score');
  //   io.emit('scores', { scores: [
  //      1000, 1200, 3000
  //   ]});
  //
  // }, 5000);

}

module.exports = Quiz;
