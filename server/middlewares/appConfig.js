/*
*	nodejs app configuration file.
*/
'use strict';
const bodyParser = require("body-parser"),		//Request body parser
	expressSession = require('express-session'), // Nodejs+Expressjs session 
	cookieParser = require('cookie-parser'),
	mongoose = require("mongoose"),
	connect = require('connect'),	//external module for express session
	morgan = require('morgan'),		//logger
	path = require("path");

module.exports = function(express, app){
	app.use(morgan('dev'));
	//static folders
	app.use(express.static('client'));
	app.use(express.static('client/js/'));
	app.use(express.static('node_modules'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(function(req, res, next){
		  res.set('X-Powered-By', 'Employee Crawler Application');
		  next();
		});
}