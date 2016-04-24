var io;
module.exports.config = function(socket) {
  io = socket;
}

module.exports.startGame = function (game) {
  console.log('game cycle started');
  io.emit('gameStart', true);

  io.emit('roundStart', game.questions[0]);
  console.log('roundStart', game.questions[0]);
  //
  // io.emit('roundEnd');
  //
  // io.emit('gameEnd');

  var roundTimeRemaining = 5000;
  var secondsRemaining = roundTimeRemaining / 1000;
  io.emit('timeLeftInRound', secondsRemaining);
  var round = setInterval(function() {
    secondsRemaining--;
    io.emit('timeLeftInRound', secondsRemaining);
    console.log('secondsRemaining', secondsRemaining)
    if(secondsRemaining == 0){
      clearInterval(round);
      io.emit('roundEnd', true);
    }
  }, 1000)


}
