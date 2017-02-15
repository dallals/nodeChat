const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log("new user connected")

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to Chat App'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User has Joined'));


	socket.on('createMessage', (message, callback) => {
		console.log('New Message', message)
		io.emit('newMessage', generateMessage(message.from, message.text));
		callback('This from the server');
		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	reatedAt: new Date().getTime()
		// })
	});

	socket.on('disconnect', () => {
		console.log('User disconnected from Server')
	})
});

app.get('/', (req, res) => {
	res.render('index.html')
})



server.listen(port, () => {
	console.log(`Started on port ${port}`)
});

module.exports = {app};