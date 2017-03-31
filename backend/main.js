var express   = require('express');
var cors      = require('cors');
var path      = require('path');
var mongoose  = require('mongoose');
var bodyParser = require('body-parser');
var session   = require('express-session');
var passport  = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash     = require('connect-flash');
var morgan    = require('morgan');
var cors  = require('express-cors');
var passcode = require('./config/index.js');

var user  = require('./routes/user');
var index = require('./routes/index');
var fx    = require('./routes/fx');
var news  = require('./routes/news');

var app = express();

app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
  secret: 'keybeard',
  resave: true,
  saveUninitialized: false
}));
// app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
  next();
})

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.use('/fx', fx);
app.use('/news', news);

// mongoose.connect("mongodb://localhost/fxcore_db");
var MONGOLAB_URI = `mongodb://${passcode.username}:${passcode.passcode}@ds143980.mlab.com:43980/fxcore_db`
mongoose.connect(MONGOLAB_URI);
mongoose.connection.on('connected', function(){
  console.log("MongoDB Connected!");
});

var port = process.env.PORT || 43980;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
