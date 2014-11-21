var McFly = require('../flux/McFly');

var LinkActions = McFly.createActions({
  loadLinks: function(links){
    return {
      actionType: 'LOAD_LINKS',
      links: links
    }
  }
})

module.exports = LinkActions;