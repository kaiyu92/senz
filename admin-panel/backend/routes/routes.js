var express = require('express');

//Get the router
var router = express.Router();

//frontend url
var client = 'http://localhost:8080';

//Middleware for all this routers requests
router.use(function timeLog(req, res, next){
	console.log('Request Received: ', dateDisplayed(Date.now()));

	//Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', client);

	//Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	//Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	//Set to true if you need the website to include cookies in the requests sent
	//to the API(e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	//Pass to next layer of middleware
	next();
});

//Welcome message for a GET at http://localhost:3001/
router.get('/', function(req, res){
	res.json({ message: 'Welcome to Senz Admin REST API ' });
});


module.exports = router;

function dateDisplayed(timestamp) {
	var date = new Date(timestamp);
	return (date.getMonth() + 1 + '/' + date.getDate() + '/'
			+ date.getFullYear() + " "
			+ date.getHours() + ":"
			+ date.getMinutes() + ":"
			+ date.getSeconds());
}
