'use strict';

/* // get the http and filesystem modules
 var http = require('http'),
 	fs = require('fs');
 // create our server using the http module
 http.createServer(function(req, res) {
 	// write to our server. set configuration for the response
 	res.writeHead(200, {
 		'Content-Type': 'text/html',
 		'Access-Control-Allow-Origin': '*'
 	});
 	// grab the index.html file using fs
 	var readStream = fs.createReadStream(__dirname + '/index.html');
 	// send the index.html file to our user
 	readStream.pipe(res);
 }).listen(1337);
 // tell ourselves what's happening
 console.log('Visit me at http://localhost:1337');*/

// load the express package and create our app
var express = require('express'),
	app = express(),
	path = require('path');
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// create routes for the admin section
// get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {
	// log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();
});

// route middleware to validate :name
adminRouter.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing validation for name!' + name);
	// once validation is done save the new item in the req
	req.name = name;
	// go to the next thing
	next();
});

// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!');
});
// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});


// route with parameters (http://localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req, res) {
	res.send('hello ' + req.params.name + '!');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});

// apply the routes to our application
app.use('/admin', adminRouter);

//Login routes using "app.route()"
app.route('/login')

	// show the form (GET http://localhost:1337/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})
	// process the form (POST http://localhost:1337/login)
	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});


// start the server
app.listen(1337);
console.log('1337 is the magic port!');