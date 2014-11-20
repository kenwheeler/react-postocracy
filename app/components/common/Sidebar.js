var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var ChannelList = require('../elements/ChannelList');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <aside className="main__sidebar">
        <ChannelList />
      </aside>
    )
  }
});