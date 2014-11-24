var Promise = require('es6-promise').Promise;
var LinkActions = require('../app/actions/LinkActions');
var UserActions = require('../app/actions/UserActions');
var Channel = require('./models/Channel')
var links = require('../mocks/links');
var superagent = require('superagent');

var Api = {
  getLinks: function(callback) {
    LinkActions.loadLinks(JSON.parse(links));
    callback && callback.call(this,links);
  },
  getState: function(user, callback){
    var data = {};
    data.links = links;
    data.user = user ? user.twitter : [];
    Channel.find(function (err, channels) {
      if (err) return console.error(err);
      data.channels = channels;
      callback && callback.call(this,data);
    });
  }
}

module.exports = Api;