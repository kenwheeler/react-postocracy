var McFly = require('../flux/McFly');

var UserActions = McFly.createActions({
  setUser: function(user){
    return {
      actionType: 'SET_USER',
      user: user
    }
  }
})

module.exports = UserActions;