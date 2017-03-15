var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bodyParser = require("body-parser");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config/index.js');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password' });
      }

      bcrypt.compare(password, user.hashedPassword, function(err, res) {
        if(res) {
          return done(null,user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    });
  }
));

router.get('/new', function (req, res, next) {
  res.render('user/new');
});

router.post('/', function (req, res, next) {
  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  console.log(user);
  user.save(function (err, user) {
    if(err) {
      res.render('user/new', {errors: err.errors})
    } else {
      const token = jwt.sign(
        {user: req.body.user},
        config.secret,
        {expiresIn: 10000}
      );
      console.log('Post sign up');
      res.json(token);
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('user/login', {message: req.flash('error')});
});

router.post(
  '/login',
  passport.authenticate('local'),
  function (req, res, next) {
    console.log('Post passport');
    const token = jwt.sign(
      {user: req.body.user},
      config.secret,
      {expiresIn: 10000}
    );
    console.log(req.body);
    res.json(token);
  }
)


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
