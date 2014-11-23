var React =  require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var PureRenderMixin = React.addons.PureRenderMixin;
var UIStore = require('../stores/UIStore');
var UserStore = require('../stores/UserStore');
var Sidebar = require('./common/Sidebar');
var Header = require('./common/Header');
var Navigation = require('./common/Navigation');

function getState() {
  return {
    navigationActive: UIStore.getNavState(),
    user: UserStore.getUser()
  }
}

var App = React.createClass({

  mixins: [UIStore.mixin, UserStore.mixin, PureRenderMixin],

  getInitialState: function(){
      return getState();
  },

  onChange: function() {
    this.setState(getState());
  },

  render: function() {
    return (
      <div className="container">
        <Header navigationActive={this.state.navigationActive} />
        <Navigation navigationActive={this.state.navigationActive} user={this.state.user} />
        <div className="content">
          <main className="main">
            <RouteHandler user={this.state.user}/>
            <Sidebar user={this.state.user} />
          </main>
        </div>
      </div>
    )
  }

});

module.exports = App;