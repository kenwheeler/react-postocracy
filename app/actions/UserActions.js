var McFly = require('../flux/McFly');

var UserActions = McFly.createActions({
  loadUser: function(user){
    return {
      actionType: 'LOAD_USER',
      user: user
    }
  }
})

module.exports = UserActions;