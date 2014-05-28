/* 
 * app.js
 * 
 * Our base app code, including Express configs
 */
var express = require('express');
var engine = require("ejs-locals");
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
exports.init = function(addRoutes) {
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        
        app.use(favicon());
		app.use(logger('dev'));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded());
		app.use(cookieParser());
		app.use(express.static(path.join(__dirname, 'public')));
       // app.use(express.methodOverride());
        //app.use(app.router);
        addRoutes(app);
        /*app.get('/*', function(req, res){
    		res.render('404.ejs', locals);
		});*/
        app.enable("jsonp callback");

    app.engine('ejs', engine);

	app.use(function(req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});

	/// error handlers

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
    
    server = app.listen(4000);

    console.log("Listening on port %d in %s mode", server.address().port, app.settings.env);

    return app;
}