var McFly = require('../flux/McFly');

var LinkActions = McFly.createActions({
  setLinks: function(links){
    return {
      actionType: 'SET_LINKS',
      links: links
    }
  }
})

module.exports = LinkActions;