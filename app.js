var React = require('react');
var Router = require('./routes');
var LinkActions = require('./app/actions/LinkActions');

var initialState = document.getElementById('initial-state').innerHTML;

LinkActions.setLinks(initialState);

React.render(Router, document.body);
