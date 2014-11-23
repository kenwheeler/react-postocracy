var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var Link = require('react-router').Link;

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="siteHeader__filters">
        <Link to="sort" params={{sort: 'top'}}>Top</Link>
        <Link to="sort" params={{sort: 'new'}}>New</Link>
        <Link to="sort" params={{sort: 'controversial'}}>Controversial</Link>
      </div>
    )
  }
});