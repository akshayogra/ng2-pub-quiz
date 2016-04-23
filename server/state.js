module.exports  = function () {
  return {
    // the games that are running
    games: [{
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
    }]
  }
}
