var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

var app = express();

const db = require('./db/index');

//Set Port
const PORT = process.env.PORT || 3001;

//Body-Parser Middleware
//express app will use body-parser to get data from POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', routes);

//Connect to DB
db.connect()
	.then(() => {
		//Start server listening on port 3001
		app.listen(PORT, function(){
			console.log(`Server running on Port ${PORT} ...`);
		});		
	});

