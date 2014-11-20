var McFly = require('../flux/McFly');
var Immutable = require('immutable');

var _links = [];

function setLinks(links) {
  _links = JSON.parse(links);
}

var LinkStore = McFly.createStore({
  getLinks: function(){
    return _links;
  }
},function(payload){
  if(payload.actionType === "SET_LINKS") {
      setLinks(payload.links);
      LinkStore.emitChange();
  }
});

module.exports = LinkStore;