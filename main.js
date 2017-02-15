var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var user = require('./routes/user');
var index = require('./routes/index');

mongoose.connect("mongodb://localhost/fxcore_db");

mongoose.connection.on('connected', function(){
  console.log("MongoDB Connected!");
});

app.set('view engine', 'ejs');

app.use('/', index);
app.use('/user', user);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on port 8080");
});
