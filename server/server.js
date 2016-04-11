var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

var assignments = require('../models/assignments');
var index = require('./routes/index');

app.use(bodyParser.json());
app.use('/', index);

var mongoURI = "mongodb://localhost:27017/aassignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error:', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port);
});
