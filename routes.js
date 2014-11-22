// React
var React = require('react');
var Router = require('react-router');
var routes = require('./app/components/Routes');
var links = require('./mocks/links.js');
var UserActions = require('./app/actions/UserActions');
var LinkActions = require('./app/actions/LinkActions');

module.exports = {
  api: {
    links: function(req,res){
      res.json(links)
    }
  },
  catchall: function(req,res){
    LinkActions.loadLinks(links);
    UserActions.loadUser(req.user ? req.user.twitter : []);
    Router.run(routes, req.path, function (Handler, state) {
      var params = state.params;
      var html = React.renderToString(<Handler/>);
      res.render('index', {
        markup: html,
        links: JSON.stringify(links),
        user: req.user ? JSON.stringify(req.user.twitter) : "[]"
      });
    });
  }
}