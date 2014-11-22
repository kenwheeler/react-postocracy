var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var AccountBox = require('../elements/AccountBox');
var ChannelList = require('../elements/ChannelList');
var SearchBox = require('../elements/SearchBox');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <aside className="main__sidebar">
        <AccountBox user={this.props.user} />
        <ChannelList />
      </aside>
    )
  }
});