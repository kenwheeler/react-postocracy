var Promise = require('es6-promise').Promise;
var http = require('http');
var LinkActions = require('../app/actions/LinkActions');

var Api = {
  getLinks: function(callback) {
    get().then(function(links){
      LinkActions.setLinks(links);
      callback && callback.call(this,links);
    });
  }
}

function get(){
  return new Promise(function(resolve, reject) {
    http.get('http://localhost:1337/api/links', function(res) {
      res.on('data', function(data){
        resolve(data);
      })
      res.on('error', function(){
        reject();
      });
    });
  });
}

module.exports = Api;