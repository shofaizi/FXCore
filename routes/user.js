var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bodyParser = require("body-parser");
var passport = require('passport');

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

router.post('/', function (req, res, next) {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email
  });
  user.save(function (err, user) {
    if(err) {
      res.render('user/new', {errors: err.errors})
    } else {
      res.render('user/success-signup', {user});
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('user/login');
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
