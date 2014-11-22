var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppRoutes = (
  <Route name="app" path="/" handler={require('./App')}>
    <Route name="top" path="/" handler={require('./home/HomeIndex')} />
    <Route name="sort" path=":sort" handler={require('./home/HomeIndex')} />
  </Route>
);

module.exports = AppRoutes;