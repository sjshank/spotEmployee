/*
*	Employee Controller to retrieve employee details based on name
*/
'use strict';
var OfficeModel = require("../models/officeModel");

//Get Employee details
exports.getEmployee = function(requestObj, responseObj) {
	if(requestObj.body){
		var queryParm = requestObj.body;
		console.log(queryParm);	
		OfficeModel.find({'emp.name' : { $regex : queryParm.searchQuery}, 'emp.isActive' : true, 'emp.hasAllocated' : true}, function(err, result){
			if (err) {
				responseObj.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
			} else{
				if(result === null){
					responseObj.json({validationMsg : "Employee is not Active"});
				}else{
					responseObj.json(result);
				}
			}
		});
	}else{
		responseObj.json({validationMsg : "Request is empty."});
	}
};


