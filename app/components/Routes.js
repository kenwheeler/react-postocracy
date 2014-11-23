var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppRoutes = (
  <Route name="app" path="/" handler={require('./App')}>
    <DefaultRoute handler={require('./home/Home')} />
    <Route name="sort" path="/:sort" handler={require('./home/Home')} />
    <Route name="channelCreate" path="/channel/create" handler={require('./channels/ChannelCreate')} />
    <Route name="loginRequired" path="/user/login" handler={require('./login/Login')} />
  </Route>
);

module.exports = AppRoutes;