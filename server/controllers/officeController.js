/*
*	Offic controller gets called on load of spot employee screen to load dummy screen data
*/
'use strict';

var OfficeModel = require("../models/officeModel");

//A dummy method to load office details
exports.loadOfficeDetails = function(req, res) {

//Dummy loops to load dummy data in mongodb
for(var i=0; i<= 3; i++){
	var s = "seat" + i;
	var n = "Alex Dillingham" + i;
	var e = "emp" + i;

	loadData(s, n, e, false, true, true);
	
}

for(var i=4; i<= 7; i++){
	var s = "seat" + i;
	var n = "Joe Henderson" + i;
	var e = "emp" + i;

	loadData(s, n, e, true, false, false);
	
}

for(var i=8; i<= 10; i++){
	var s = "seat" + i;
	var n = "Smith Laughed" + i;
	var e = "emp" + i;

	loadData(s, n, e, false, true, true);
	
}

for(var i=11; i<= 13; i++){
	var s = "seat" + i;
	var n = "Jason Lenderson" + i;
	var e = "emp" + i;

	loadData(s, n, e, true, false, false);
	
}

for(var i=14; i<= 18; i++){
	var s = "seat" + i;
	var n = "David Wesner" + i;
	var e = "emp" + i;

	loadData(s, n, e, false, true, true);
	
}
for(var i=19; i<= 22; i++){
	var s = "seat" + i;
	var n = "Steve Newhouse" + i;
	var e = "emp" + i;

	loadData(s, n, e, true, false, false);
	
}

for(var i=23; i<= 23; i++){
	var s = "seat" + i;
	var n = "Steve Baker" + i;
	var e = "emp" + i;

	loadData(s, n, e, false, true, true);
	
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


function loadData(s, n, e, isVacant, hasAllocated, isActive){

	OfficeModel.update(
						{ 'seatID' : s},
						{
						 	$set: {
							 	"seatID" : s,
							    "isVacant" : isVacant,
							    "emp" :
							        {
							            "hasAllocated" : hasAllocated,
							            "isActive" : isActive,
							            "empID" : e,
									    "name" : n,
									    "designation" : "Sr. Developer",
									    "team" : "Front End Team",
									    "project" : "ClickLabs - Spot Employee"
							        }
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
};
