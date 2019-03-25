var express = require('express');
var User = require('../models/User');

//Password hashing
var passwordHash = require('password-hash');

//Get the router
var router = express.Router();

//frontend url
var client = 'http://localhost:3000';

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

//=====================USER==============================
//POST authenticate user login(using POST at http://localhost:3001/login)
router.route('/login').post(function(req, res){
	var username = req.body.identifier;
	var password = req.body.password;

	User.findOne({ user: username }, function(err, user) {
		//401 means user is unknown
		if(!user) {
			res.json({
				code: 401,
				status: 'fail',
				message: 'User does not exist'
			});
		}
		else if(passwordHash.verify(password, user.password)) {
			res.json({
				status: 'success',
				user: user,
				message: 'Successfully login'
			});
		}
		else {
			res.json({
				code: 403,
				status: 'fail',
				message: 'Invalid password'
			})
		}
	});
});

//POST a user (using POST at http://localhost:3001/register)
router.route('/register').post(function(req, res){

	User.find({ user: req.body.user }).exec(function(err, results) {

		//if count is not 0, means username exists
		var count = results.length;

		if(count === 0) {
			var newUser = new User();

			//Set the user attributes
			newUser.user = req.body.user;

			//hash password
			var hashedPassword = passwordHash.generate(req.body.password);
			newUser.password = hashedPassword;

			newUser.email = req.body.email;
			newUser.firstName = req.body.firstName;
			newUser.lastName = req.body.lastName;

			newUser.save(function(err) {
				res.json({
					status: 'success',
					message: 'Successfully registered'
				})
			});
		}
		else
		{
			res.json({
				status: 'fail',
				message: 'Username is already registered'
			})
		}
	})
});
//=======================================================

//=====================PROJECT==============================
//POST a new project (using POST at http://localhost:3001/addProject)
router.route('/addProject').post(function(req, res){
	var newProject = new Project();

	//Set the Project attributes
	newProject.title = req.body.title;
	newProject.desc = req.body.desc;
	newProject.sharedKey = req.body.sharedKey;
	newProject.owner = req.body.user; 

	newProject.save(function(err, result) {
		if(err)
			res.json({
				status: 'fail',
				message: 'Sorry, unable to add new project'
			})
		else
			res.json({
				status: 'success',
				message: 'Successfully added a new project',
				id: result._id
			})
	});
});

//GET all projects that the user is working on (using GET at http://localhost:3001/projects/:user)
router.route('/projects/:user').get(function(req, res) {
	Project.find({users: {$elemMatch:{$eq:req.params.user}}}, function(err, projects) {
		if(err)
			res.send(err);
		res.json(projects);
	});
});

//Add device to the project ...
//PUT update project (using PUT at http://localhost:3001/addDeviceProject/:project_id)
router.route('/addDeviceProject/:project_id').put(function(req, res) {
	Project.findByIdAndUpdate(req.params.project_id,
							{ $push: { nodes: req.body.device_id }},
							{ new: true }, function(err, project) {
								if(err)
									res.json({
										status: 'fail',
										message: 'Sorry, unable to add this device to this project'
									})
									//res.send(err);
								else
									res.json({
										status: 'success',
										message: 'Successfully added this device to this project'
									})
							})
});

//==========================================================

//=====================DEVICE==============================
//POST a new device (using POST at http://localhost:3001/addDevice)
router.route('/addDevice').post(function(req, res){
	var newDevice = new Device();

	//Set the Project attributes
	newDevice.deviceName = req.body.deviceName;
	newDevice.owner = req.body.user;
	newDevice.project_id = req.body.project_id;

	newDevice.save(function(err, result) {
		if(err)
			res.json({
				status: 'fail',
				message: 'Sorry, unable to add new node'
			})
			//res.send(err);
		else
			res.json({
				status: 'success',
				message: 'Successfully created a new node',
				node: result
			})
	});
});

//==========================================================

module.exports = router;

function dateDisplayed(timestamp) {
	var date = new Date(timestamp);
	return (date.getMonth() + 1 + '/' + date.getDate() + '/'
			+ date.getFullYear() + " "
			+ date.getHours() + ":"
			+ date.getMinutes() + ":"
			+ date.getSeconds());
}
