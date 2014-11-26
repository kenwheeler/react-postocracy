var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var config = require('./config');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');

module.exports = function(app, passport){
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
};