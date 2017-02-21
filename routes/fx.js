var express = require('express');
var router = express.Router();

var latestUrl = 'http://api.fixer.io/latest';

router.get('/', function(req, res, next) {
  res.render('fx/index');
});
