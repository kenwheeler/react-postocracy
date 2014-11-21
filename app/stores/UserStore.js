var McFly = require('../flux/McFly');
var Immutable = require('immutable');

var _user = {};

function setUser(user) {
  _user = user;
}

var UserStore = McFly.createStore({
  getUser: function(){
    return _user;
  }
},function(payload){
  if(payload.actionType === "SET_USER") {
      setUser(payload.user);
      UserStore.emitChange();
  }
});

module.exports = UserStore;