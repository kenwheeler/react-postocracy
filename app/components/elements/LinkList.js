var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var Link = require('./Link');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    var links = this.props.links.map(function(link, index){
      return <Link key={index} index={index} link={link} />
    });
    return (
      <div className="linklist">
        {links}
      </div>
    )
  }
});