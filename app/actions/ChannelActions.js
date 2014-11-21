var McFly = require('../flux/McFly');

var ChannelActions = McFly.createActions({
  loadChannels: function(channels){
    return {
      actionType: 'LOAD_CHANNELS',
      links: links
    }
  }
})

module.exports = ChannelActions;