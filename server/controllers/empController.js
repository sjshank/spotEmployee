/*
*	User controller for saving user authenticated data in user model
*/
'use strict';
var EmpModel = require("../models/empModel");
var OfficeModel = require("../models/officeModel");


exports.loadOfficeDetails = function(req, res) {

//Dummy loops to load dummy data in mongodb
for(var i=0; i<= 14; i++){
	var s = "seat" + i;
	var n = "Employee_" + i;
	var e = "emp" + parseInt(i + 1);

	OfficeModel.update(
						{ 'seatID' : s},
						{
						 	$set: {
							 	"seatID" : s,
							    "isVacant" : false,
							    "Employees" : [ 
							        {
							            "hasAllocated" : true,
							            "isActive" : true,
							            "empID" : e,
									    "name" : n,
									    "designation" : "Sr. Developer",
									    "team" : "Front End Team",
									    "project" : "ClickLabs - Spot Employee"
							        }
							    ]
						 	}
						},
						{
							upsert: true,
					    	new : true
					    }, function(err, result){
								if(err){
									console.log(err);
									res.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
								}
					});
}

for(var i=15; i<= 20; i++){
	var s = "seat" + i;
	var n = "Employee_" + i;
	var e = "emp" + parseInt(i + 1);

	OfficeModel.update(
						{ 'seatID' : s},
						{
						 	$set: {
							 	"seatID" : s,
							    "isVacant" : true,
							    "Employees" : [ 
							        {
							            "hasAllocated" : false,
							            "isActive" : false,
							            "empID" : e,
									    "name" : n,
									    "designation" : "Sr. Developer",
									    "team" : "Front End Team",
									    "project" : "ClickLabs - Spot Employee"
							        }
							    ]
						 	}
						},
						{
							upsert: true,
					    	new : true
					    }, function(err, result){
								if(err){
									console.log(err);
									res.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
								}
					});
}

//Dummy loops to load dummy data in mongodb
for(var i=21; i<= 24; i++){
	var s = "seat" + i;
	var n = "Employee_" + i;
	var e = "emp" + parseInt(i + 1);

	OfficeModel.update(
						{ 'seatID' : s},
						{
						 	$set: {
							 	"seatID" : s,
							    "isVacant" : false,
							    "Employees" : [ 
							        {
							            "hasAllocated" : true,
							            "isActive" : true,
							            "empID" : e,
									    "name" : n,
									    "designation" : "",
									    "team" : "",
									    "project" : ""
							        }
							    ]
						 	}
						},
						{
							upsert: true,
					    	new : true
					    }, function(err, result){
								if(err){
									console.log(err);
									res.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
								}
					});
}



//Retrieve all the seats and employee details on page load
OfficeModel.find().exec(function(err, result){
			if(err){
				console.log(err);
				res.json({errMsg : "Something went wrong in backend. We are working hard to resolve."});
			}else{
				res.json({data: result});
			}
		});
		
};

