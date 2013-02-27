/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , ejs = require('ejs-locals');
  // , FB = require('fb');
var app = express();
app.engine('ejs', ejs);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(process.env.SECRET || 'fake_secret'));
  app.use(express.session());
  app.use(express.static(path.join(__dirname, 'static')));
  app.use(app.router);

  app.use( function(err, req, res, next) {
    res.render('500.ejs', { locals: { error: err }, status: 500 });
  });
});



app.configure('development', function(){
   app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
    // app.use(express.logger({ format: ':method :url' }));
});

app.configure('production', function(){
   app.use(express.errorHandler()); 
});


/** 
* These locals and routes should really be refactored into a new file later.
*/
var locals = {
        title:       'Node | Express | EJS | Boostrap',
        description: 'A Node.js applicaton bootstrap using Express 3.x, EJS, Twitter Bootstrap, and CSS3',
        author:      'C. Aaron Cois, Alexandre Collin',
        _layoutFile: true
    };

app.get('/', function (req, res) {
    locals.date = new Date().toLocaleDateString();

    res.render('home.ejs', locals);

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});