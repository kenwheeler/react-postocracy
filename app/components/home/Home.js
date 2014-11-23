var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');
var LinkStore = require('../../stores/LinkStore');
var Feed = require('../common/Feed');

function getState() {
  return {
    links: LinkStore.getLinks()
  }
}

module.exports = React.createClass({
  mixins: [PureRenderMixin, LinkStore.mixin],
  getInitialState: function(){
      return getState();
  },
  onChange: function() {
    this.setState(getState());
  },
  render: function() {
    return (
      <DocumentTitle title='postocracy | home'>
        <Feed links={this.state.links} />
      </DocumentTitle>
    )
  }
});