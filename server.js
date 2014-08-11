//SERVER SETUP
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var fs = require('fs');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

//SERVER ROUTING
//serve text
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function (socket) {
	socket.on('save', function(data) {
		fs.writeFile('public/data/log', data.text, function (err) {
		  if (err) throw err;
		  console.log('Log saved!');
		});
	});
});

