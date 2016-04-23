
function Quiz(http) {

  var io = require('socket.io')(http);

  io.on('connection', function(socket){
    console.log('a user connected');
  });

  setInterval(function () {
    console.log('sending score');
    io.emit('scores', { scores: [
       1000, 1200, 3000
    ]});

  }, 5000);

}

module.exports = Quiz;
