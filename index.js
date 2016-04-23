var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var Quiz = require('./server')(http);
var PORT = 8080;

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

http.listen(PORT, function(){
  console.log('listening on *:'+PORT);
});
