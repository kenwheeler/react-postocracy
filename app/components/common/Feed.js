var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var LinkList = require('../elements/LinkList');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <section className="main__feed">
        <LinkList links={this.props.links} />
      </section>
    )
  }
});