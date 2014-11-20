var React =  require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var Header = require('./common/Header');
var Navigation = require('./common/Navigation');
var UIStore = require('../stores/UIStore');
var LinkStore = require('../stores/LinkStore');
var API = require('../../api/Api');

function getState() {
  return {
    navigationActive: UIStore.getNavState(),
    links: LinkStore.getLinks()
  }
}

var App = React.createClass({

  mixins: [UIStore.mixin, LinkStore.mixin, PureRenderMixin],

  getInitialState: function(){
      return getState();
  },

  onChange: function() {
    this.setState(getState());
  },

  render: function() {

    return (
      <div className="container">
        <Header />
        <section>
        {this.props.activeRouteHandler({links: this.state.links})}
        </section>
      </div>
    )

  }

});

module.exports = App;