var McFly = require('../flux/McFly');

var UIActions = McFly.createActions({
  setNavState: function(state){
    return {
      actionType: 'SET_NAVSTATE',
      state: state
    }
  }
})

module.exports = UIActions;