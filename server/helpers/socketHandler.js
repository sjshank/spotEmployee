module.exports = function(io){
/*
*	Server-Client side socket connection to handle events
*/
		io.on('connection', function(socket){
			io.sockets.setMaxListeners(0);
			socket.on('mouseover', function(elementObj){
				io.emit('mouseover', function(){
					console.log('in socket');
				});
			  });
	});
}