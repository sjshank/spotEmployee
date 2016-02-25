/*
*	Routing configuration file
*/
'use strict';
const router = require("./init"),
	db = require("./db"),
	officeController = require("../controllers/officeController"),
	empController = require("../controllers/empController");


router.route('/office')
	.post(function(req, res){
		officeController.getEmployee(req, res);
	});

router.route('/load')
	.post(function(req, res){
		empController.loadOfficeDetails(req, res);
	});


module.exports = router;