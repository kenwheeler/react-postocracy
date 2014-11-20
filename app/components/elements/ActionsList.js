var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var Link = require('react-router').Link;

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="actionsList">
        <a href="#"><i className="icon-magnifying-glass"/></a>
        <a href="#"><i className="icon-mail"/></a>
        <a href="#"><i className="icon-torso"/></a>
        <a href="#"><i className="icon-widget"/></a>
      </div>
    )
  }
});