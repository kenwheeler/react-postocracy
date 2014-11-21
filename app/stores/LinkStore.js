var McFly = require('../flux/McFly');
var Immutable = require('immutable');

var _links = [];

function loadLinks(links) {
  _links = links;
}

var LinkStore = McFly.createStore({
  getLinks: function(){
    return _links;
  }
},function(payload){
  if(payload.actionType === "LOAD_LINKS") {
      loadLinks(payload.links);
      LinkStore.emitChange();
  }
});

module.exports = LinkStore;