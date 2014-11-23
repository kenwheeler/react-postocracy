var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');
var ChannelForm = require('./ChannelForm');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <DocumentTitle title='postocracy | new channel'>
        <ChannelForm user={this.props.user}/>
      </DocumentTitle>
    )
  }
});