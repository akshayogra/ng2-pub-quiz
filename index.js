var express = require('express');
var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').Server(app);
var PORT = 8080;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var Quiz = require('./server')(http, app);

http.listen(PORT, function(){
  console.log('listening on *:'+PORT);
});
