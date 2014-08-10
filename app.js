//SERVER SETUP
var express = require('express'),
	fs = require('fs');
var app = express();
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

//SERVER ROUTING
//serve text
app.get('/hello', function(req, res){
  res.sendfile('hello.html');
});
//serve html page
app.get('/', function(req, res){
  res.sendfile('index.html');
});
//save to file
app.post('/', function(req, res){
	console.log(req);
});
