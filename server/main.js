var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('hello', function (req, res) {
	res.status(200).send("Hola mundo!");
});

io.on('connection', function (socket) {
    console.log('Alguien se ha conectado con Socket');
    socket.emit('messages', {
        id: 1,
        text: 'Hola soy un mensaje',
        author: 'Félix Méndez'
    });
});

server.listen(8080, function () {
	console.log('Servidor correindo en http://localhost:8080');
});