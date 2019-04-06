var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

var app = express();

//Body-Parser Middleware
//express app will use body-parser to get data from POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);

module.exports = app;