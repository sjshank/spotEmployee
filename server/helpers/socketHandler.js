'use strict';
var OfficeModel = require("../models/officeModel");

module.exports = function(io, empController){
/*
*	Server-Client side socket connection to handle events
*/
		io.on('connection', function(socket){
			io.sockets.setMaxListeners(0);
			var response = "";
			socket.on('mouseover', function(obj){
				OfficeModel.findOne({
						seatID : obj.seatID,
						'Employees.empID' : obj.empID
					}).exec(function(err, result){
							if(err){
								console.log(err);
								var errMsg = "Something went wrong in backend. We are working hard to resolve.";
								socket.emit('mouseover', errMsg);
							}else{
								console.log(result);
								socket.emit('mouseover', result);
							}
						});
					io.sockets.removeListener('mouseover', function(){});
			  });
	});
}