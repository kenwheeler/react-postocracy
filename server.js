// Server
var express = require('express');
var http = require('http');

// DB
var mongoose = require('mongoose');
require('./config/db')(mongoose);

// Auth
var passport = require('passport');
require('./config/auth')(passport)

// Config
var app = express();
var port = process.env.PORT || 1337;
require('./config/environment')(app, passport);

// Routes
require('node-jsx').install();
var routes = require('./config/routes.js');

// Static
app.use("/", express.static(__dirname + "/public/"));

// API
app.get("/api/links", routes.api.links);
app.get("/api/channel/unique/", isLoggedIn, routes.api.channel.unique);
app.post("/api/channel/", isLoggedIn, routes.api.channel.create);

// Auth
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

// Site
app.get('/channel/:channel/', isLoggedIn, routes.catchall);
app.get('/channel/:channel/:page/', isLoggedIn, routes.catchall);
app.get('/channel/:channel/:view/:page/', isLoggedIn, routes.catchall);

app.get('*', isLoggedIn, routes.catchall);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  return next();
}

var server = http.createServer(app).listen(port, function() {
  console.log('Server started on port ' + port);
});