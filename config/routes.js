// React
var React = require('react');
var Router = require('react-router');
var routes = require('../app/components/Routes');
var links = require('../mocks/links.js');
var Api = require('../api/Api');
var UserActions = require('../app/actions/UserActions');
var LinkActions = require('../app/actions/LinkActions');
var Channel = require('../api/models/Channel');
var S = require('string');

module.exports = {
  api: {
    links: function(req,res){
      res.json(links)
    },
    channel: {
      create: function(req,res){
        var channel = new Channel();
        channel._creator = req.user.id
        channel.name = req.body.name;
        channel.slug = req.body.name.toLowerCase();
        channel.description = S(req.body.description).stripTags();
        channel.save(function(err) {
          if (err)
            res.send(err);
          res.json({ saved: true, slug: channel.slug });
        });
      },
      unique: function(req,res){
        Channel.findOne({'slug': req.query.name.toLowerCase()}, function(err,channel){
          if (err || channel === null) {
            res.json({unique: true});
          } else {
            res.json({unique: false});
          }
        });
      }
    }
  },
  catchall: function(req,res){
    Api.getState(req.user, function(data){
      LinkActions.loadLinks(data.links);
      UserActions.loadUser(data.user);
      Router.run(routes, req.path, function (Handler, state) {
        var params = state.params;
        var html = React.renderToString(<Handler/>);
        res.render('index', {
          markup: html,
          links: JSON.stringify(links),
          user: req.user ? JSON.stringify(req.user.twitter) : "[]"
        });
      });
    })
  }
}