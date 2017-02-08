
var socket = io();

socket.on('connect', function () {
	console.log('connected to server');


	socket.emit('createMessage', {
		to: 'Sammy Dallal',
		text: 'testing this app'
	});

});

socket.on('newMessage', function(message){
	console.log('New message is', message)
});

