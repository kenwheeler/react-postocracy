var McFly = require('../flux/McFly');
var Immutable = require('immutable');

var _channels = {};

function loadChannels(channels) {
  _channels = channels;
}

var ChannelStore = McFly.createStore({
  getChannels: function(){
    return _channels;
  }
},function(payload){
  if(payload.actionType === "LOAD_CHANNELS") {
      loadChannels(payload.channels);
      UserStore.emitChange();
  }
});

module.exports = ChannelStore;