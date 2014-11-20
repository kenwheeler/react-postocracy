var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

var AppRoutes = (
  <Routes location="history">
    <Route name="app" handler={require('./app/components/App')}>
      <Route name="home" path="/" handler={require('./app/components/home/HomeIndex')} />
    </Route>
  </Routes>
);

module.exports = AppRoutes;