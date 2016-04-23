var connect = require('connect');
var http = require('http');


var app = connect();

var PORT = 8080;

console.log("running in: " + __dirname);

// parse urlencoded request bodies into req.body
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());


var serveStatic = require('serve-static')
// app.use(serveStatic(__dirname + 'node_modules'));
app.use(serveStatic('.', {'index': ['index.html', 'index.htm']}));


// respond to all requests
// app.use(function(req, res){
//   res.end('Hello from Connect!\n');
// });

//create node.js http server and listen on port
http.createServer(app).listen(PORT);
