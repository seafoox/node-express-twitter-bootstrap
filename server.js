/* 
 * server.js
 * 
 * The main file, to be invoked at the command line. Calls app.js to get 
 * the Express app object.
 */
var locals = {
        title: 		 'Node | Express | EJS | Boostrap',
        description: 'A Node.js applicaton bootstrap using Express 3.x, EJS, Twitter Bootstrap, and CSS3',
        author: 	 'Omrigan',
        _layoutFile: true
    };
    
var app = require('./app').init(function(app){
	app.get('/', function(req,res){

    	locals.date = new Date().toLocaleDateString();

    	res.render('home.ejs', locals);
	});
});





/* The 404 Route (ALWAYS Keep this as the last route) */
