var React =  require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var PureRenderMixin = React.addons.PureRenderMixin;
var Header = require('./common/Header');
var Navigation = require('./common/Navigation');
var UIStore = require('../stores/UIStore');
var LinkStore = require('../stores/LinkStore');
var UserStore = require('../stores/UserStore');
var API = require('../../api/Api');

function getState() {
  return {
    navigationActive: UIStore.getNavState(),
    links: LinkStore.getLinks(),
    user: UserStore.getUser()
  }
}

var App = React.createClass({

  mixins: [UIStore.mixin, LinkStore.mixin, UserStore.mixin, PureRenderMixin],

  getInitialState: function(){
      return getState();
  },

  onChange: function() {
    this.setState(getState());
  },

  render: function() {
    return (
      <div className="container">
        <Header navigationActive={this.state.navigationActive}/>
        <Navigation navigationActive={this.state.navigationActive} user={this.state.user} />
        <RouteHandler links={this.state.links} user={this.state.user} />
      </div>
    )
  }

});

module.exports = App;