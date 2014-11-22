var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppRoutes = (
  <Route name="app" path="/" handler={require('./App')}>
    <DefaultRoute name="home" handler={require('./home/HomeIndex')} />
  </Route>
);

module.exports = AppRoutes;