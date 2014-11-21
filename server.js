// Server
var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var http = require('http');
var config = require('./config.js');

// DB
var mongoose = require('mongoose');
var User = require('./api/models/User');
mongoose.connect(process.env.MONGOLAB_URI || config.mongo.url);

// Auth
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var flash    = require('connect-flash');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var session = require('express-session');
var UserActions = require('./app/actions/UserActions');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new TwitterStrategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: "/auth/twitter/callback"
}, function(token, tokenSecret, profile, done) {
  process.nextTick(function() {
    User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
      if (err)
        return done(err);
      if (user) {
        return done(null, user);
      } else {
        var newUser = new User();
        newUser.twitter.id = profile.id;
        newUser.twitter.token = token;
        newUser.twitter.username = profile.username;
        newUser.twitter.displayName = profile.displayName;
        newUser.twitter.profilePhoto = profile._json.profile_image_url
        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  });
}));

// API
var API = require('./api/Api');
var links = require('./mocks/links.js');

// React
var React = require('react');
require('node-jsx').install();
var Router = require('react-router');
var routes = require('./routes.js');

// Server Init
var app = express();
var port = process.env.PORT || 1337;

app.engine('handlebars', exphbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.disable('etag');

app.use(morgan('dev'))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'cocainerainboots', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use("/", express.static(__dirname + "/public/"));

app.get("/api/links", function(req,res){
  res.json(links)
});

app.get('/login', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect : '/',
    failureRedirect : '/'
  })
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('/', isLoggedIn, function(req,res){
  API.getLinks(function(links){
    req.user && UserActions.loadUser(req.user.twitter);
    Router.renderRoutesToString(routes, req.path, function(err, ar, html, data) {
      res.render('index', {
        markup: html,
        links: links,
        user: req.user ? JSON.stringify(req.user.twitter) : "[]"
      });
    });
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  return next();
}

var server = http.createServer(app).listen(port, function() {
  console.log('Server started on port ' + port);
});