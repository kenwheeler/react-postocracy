var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');
var Feed = require('../common/Feed');
var Sidebar = require('../common/Sidebar');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <DocumentTitle title='postocracy'>
        <main className="main">
          <Feed links={this.props.links} />
          <Sidebar />
        </main>
      </DocumentTitle>
    )
  }
});