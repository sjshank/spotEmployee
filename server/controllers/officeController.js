/*
*	User controller for saving user authenticated data in user model
*/
'use strict';
var OfficeModel = require("../models/officeModel");

//save authenticated data
exports.getEmployee = function(req, res) {
	
	if(typeof req.body != undefined || req.body !== ""){

			OfficeModel.find().exec(function(err, result){
				if(err){
					console.log(err); 
					res.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
				}else{
					res.json({data : result});
				}
			});
	}else{
		res.json({validationMsg : "Request is empty"});
	}
};


