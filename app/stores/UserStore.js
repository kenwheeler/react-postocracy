var McFly = require('../flux/McFly');
var Immutable = require('immutable');

var _user = {};

function loadUser(user) {
  _user = user;
}

var UserStore = McFly.createStore({
  getUser: function(){
    return _user;
  }
},function(payload){
  if(payload.actionType === "LOAD_USER") {
      loadUser(payload.user);
      UserStore.emitChange();
  }
});

module.exports = UserStore;