var Promise = require('es6-promise').Promise;
var http = require('http');
var LinkActions = require('../app/actions/LinkActions');
var UserActions = require('../app/actions/UserActions');

var Api = {
  getLinks: function(callback) {
    get().then(function(links){
      LinkActions.loadLinks(JSON.parse(links));
      callback && callback.call(this,links);
    });
  },

}

function get(){
  return new Promise(function(resolve, reject) {
    http.get('http://postocracy.herokuapp.com/api/links', function(res) {
      res.on('data', function(data){
        resolve(data);
      })
      res.on('error', function(err){
        reject();
      });
    });
  });
}

module.exports = Api;