// Create web server
// Create web server
// Use the express framework
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//