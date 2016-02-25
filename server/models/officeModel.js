'use strict';
const db = require("../middlewares/db"),
    Schema = db.Schema;

var officeModel = new Schema({
    seatID: {type: String, unique: true},
    isVacant: {type: Boolean, default: true},
    Employees: [{
            hasAllocated: {type: Boolean, default: false},
            isActive: {type: Boolean, default: false},
            empID : {type: String, unique: true},
            name : {type: String, default: "Employee"},
            designation : {type: String, default: 'Bench Resource'},
            team : {type: String, default: "Bench Department"},
            project : {type: String, default: "Bench"}
    }]
});
var office = db.model('OfficeModel', officeModel);

module.exports = office;
