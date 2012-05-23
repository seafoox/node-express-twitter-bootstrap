#!/usr/bin/env node
var app = require('./app').init(4000);

var locals = {
        title: 		 'NodeJS Boostrap using Express / EJS / Twitter Bootstrap / CSS3',
        description: 'Node Express HTML5 & CSS3',
        author: 	 'Alexandre Collin'
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('template.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});
