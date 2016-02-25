'use strict';
const db = require("../middlewares/db"),
	Schema = db.Schema;


var empModel = new Schema({
	empID : {type: Number, unique: true},
	name : {type: String, default: "Employee"},
	designation : {type: String, default: 'Bench Resource'},
	team : {type: String, default: "Bench Department"},
	project : {type: String, default: "Bench"}
});

var emp = db.model('EmpModel', empModel);

module.exports = emp;