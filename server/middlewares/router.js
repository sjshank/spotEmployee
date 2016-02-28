/*
*	Routing configuration file
*/
'use strict';
const router = require("./init"),
	db = require("./db"),
	officeController = require("../controllers/officeController"),
	empController = require("../controllers/empController");



router.route('/load')
	.post(function(req, res){
		officeController.loadOfficeDetails(req, res);
	});

router.route('/search')
	.post(function(req, res){
		empController.getEmployee(req, res);
	});


module.exports = router;