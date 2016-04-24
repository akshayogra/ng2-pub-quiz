var io;
module.exports.config = function(socket) {
  io = socket;
}

module.exports.startGame = function (game) {
  console.log('game cycle started');
  io.emit('gameStart', true);
  //
  // io.emit('roundEnd');
  //
  // io.emit('gameEnd');

  var tickTime = 1000;
  var restTime = 2000;
  var numRounds = game.questions.length;

  startRound(numRounds);

  function startRound(questionIndex) {
    io.emit('roundStart', game.questions[questionIndex]);
    console.log('roundStart', game.questions[questionIndex]);
    var seconds = 7;
    var round = setInterval(function() {
      seconds--;
      io.emit('timeLeftInRound', seconds);
      console.log('secondsRemaining', seconds);
      if(seconds == 0) {
        clearInterval(round);
        io.emit('roundEnd', true);
        numRounds--;
        if(numRounds >= 0 ) {
          setTimeout(function(){
            startRound(numRounds);
          }, restTime);

        } else {
          io.emit('gameEnd', game);
          console.log('gameEnd', game);
        }
      }
    }, tickTime);
  }



}
