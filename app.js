
const express = require('express'),
      expressHbs = require('express3-handlebars'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      app = express();


  // view engine setup
  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'htm');
  app.use(logger('dev'));
/*
* Built-in middleware express.static to server static files such as images/css/js etc
*/
  app.use('/', express.static('client/'));
  app.use(express.static('node_modules'));
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

//Show landing page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/views/index.htm');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
