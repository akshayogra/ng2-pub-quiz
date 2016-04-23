

module.exports  = function (app) {

  // This route is for answering the quiz question
  // we expect request to
  app.post('/answer', function (req, res) {

    console.log('Got an answer! ')
    res.send(200);

  });

}
