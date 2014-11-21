var Promise = require('es6-promise').Promise;
var LinkActions = require('../app/actions/LinkActions');
var UserActions = require('../app/actions/UserActions');
var links = require('../mocks/links');

var Api = {
  getLinks: function(callback) {
    LinkActions.loadLinks(JSON.parse(links));
    callback && callback.call(this,links);
  },

}

module.exports = Api;