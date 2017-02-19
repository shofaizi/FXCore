var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('layout');
});

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

module.exports = router;
