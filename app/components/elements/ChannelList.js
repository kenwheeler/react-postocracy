var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var Link = require('react-router').Link;

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="channels">
        <h2 className="channels__header">Channels</h2>
        <ul className="channels__list">
          <li><Link to="app">All</Link></li>
        </ul>
        <div className="channels__actions">
          <Link to="channelCreate" className="channels__create">Create A Channel</Link>
        </div>
      </div>
    )
  }
});