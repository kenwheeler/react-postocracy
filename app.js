var React = require('react');
var Router = require('./routes');
var LinkActions = require('./app/actions/LinkActions');
var UserActions = require('./app/actions/UserActions');

var links = JSON.parse(document.getElementById('links-state').innerHTML);
var user = JSON.parse(document.getElementById('user-state').innerHTML);

LinkActions.loadLinks(links);
user && UserActions.loadUser(user);

React.render(Router, document.body);
