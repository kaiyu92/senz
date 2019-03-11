var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var mongoose = require('mongoose');

var app = express();

//Connect to Mongodb
mongoose.connect('mongodb://localhost/senzdb', { useNewUrlParser: true });

//Body-Parser Middleware
//express app will use body-parser to get data from POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Set Port
var PORT = process.env.PORT || 3001;

app.use('/', routes);

//Start server listening on port 3001
app.listen(PORT, function(){
	console.log(`Server running on Port ${PORT} ...`);
});
