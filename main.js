var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var user = require('./routes/user');
var index = require('./routes/index');

mongoose.connect("mongodb://localhost/fxcore");

app.set('view engine', 'ejs');

app.use('/', index);
app.use('/user', user);

app.listen(8080, function() {
  console.log("Listening on port 8080");
});
