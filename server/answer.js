var maxTime = 30;
var maxScore = 10;

module.exports.listen  = function (app, state) {

  // This route is for answering the quiz question
  // we expect request to
  app.post('/answer', function (req, res) {
   var question = state.get(req.body.questionId).from('questions');
   console.log('question to answer', question);
   var player = state.get(req.body.playerId).from('players');
   if(question.checkAnswer(req.body.answerIndex)) {
     var tFactor = ((maxTime - state.db.roundTimer) / maxTime) + 0.3;
     var playerScore = tFactor * maxScore;
     player.addScore(playerScore);
     console.log('player' + player.name + ': scored '+ playerScore);
   } else {

   }
   res.sendStatus(200);
  });

}
