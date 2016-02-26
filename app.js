
/*
* app.js is an entry pooint of nodejs based application.
* 
*/
'use strict';
const express = require('express'),
  route = require('./server/middlewares/router'),
  app = express();

  
/*const server = require('./server')(app);*/
const appConfig = require('./server/middlewares/appConfig')(express, app);

var socket = require('./server')(app);
  //require('events').EventEmitter.prototype._maxListeners = 0;

/*
* Routing the request coming from client side
*/
  app.use('/api', route);
  var eventHandler = require('./server/helpers/socketHandler')(socket);
 
//Show index page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/views/index.htm');
});




module.exports = app;
