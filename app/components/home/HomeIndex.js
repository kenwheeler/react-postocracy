var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');
var LinkList = require('../elements/LinkList');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <DocumentTitle title='postocracy'>
        <main className="main">
          <LinkList links={this.props.links} />
        </main>
      </DocumentTitle>
    )
  }
});