var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var links = require('./mocks/links.js');

var API = require('./app/api/Api');

var React = require('React');
require('node-jsx').install();

var Router = require('react-router');
var routes = require('./routes.js');

var app = express();
var port = process.env.PORT || 1337;

app.engine('handlebars', exphbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.disable('etag');

app.use("/", express.static(__dirname + "/public/"));

app.get("/api/links", function(req,res){
  res.json(links)
});

app.get('*', function(req,res){
  switch(req.path) {
    case '/favicon.ico':
      return "lol"
    default:
      API.getLinks(function(links){
        Router.renderRoutesToString(routes, req.path, function(err, ar, html, data) {
          res.render('index', {
            markup: html,
            state: links
          });
        });
      });
  }

});

var server = http.createServer(app).listen(port, function() {
  console.log('Server started on port ' + port);
});