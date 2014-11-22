var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="searchBox">
        <div className="searchBox__searchInput">
          <input type="text" className="searchBox__input"/>
          <i className="icon-magnifying-glass"/>
        </div>
      </div>
    )
  }
});