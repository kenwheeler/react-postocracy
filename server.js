// Server
var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var http = require('http');
var config = require('./config.js');

// DB
var mongoose = require('mongoose');
var User = require('./api/models/User');
var mongoUrl= process.env.MONGOLAB_URI || config.mongo.url;

var connectWithRetry = function() {
  return mongoose.connect(mongoUrl, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    }
  });
};
connectWithRetry();

// Auth
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var flash    = require('connect-flash');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

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

// Routes
require('node-jsx').install();
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
app.use(session({
  secret: 'cocainerainboots',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
      db : 'sessions',
      url: process.env.MONGOLAB_URI || config.mongo.url
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use("/", express.static(__dirname + "/public/"));

// Links
app.get("/api/links", routes.api.links);

// Channel
// app.get("/api/channel", routes.api.channel.list);
// app.get("/api/channel/:id", routes.api.channel.read);
app.get("/api/channel/unique/", isLoggedIn, routes.api.channel.unique);
app.post("/api/channel/", isLoggedIn, routes.api.channel.create);
// app.update("/api/channel/:id", isLoggedIn, routes.api.channel.update);
// app.delete("/api/channel/:id", isLoggedIn, routes.api.channel.delete);

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