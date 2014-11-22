var React =  require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var PureRenderMixin = React.addons.PureRenderMixin;
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
      <RouteHandler links={this.state.links} user={this.state.user} params={this.props.params} navigationActive={this.state.navigationActive} />
    )
  }

});

module.exports = App;