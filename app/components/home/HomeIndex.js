var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');
var Feed = require('../common/Feed');
var Sidebar = require('../common/Sidebar');
var Header = require('../common/Header');
var Navigation = require('../common/Navigation');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <DocumentTitle title='postocracy'>
        <div className="container">
          <Header navigationActive={this.props.navigationActive} />
          <Navigation navigationActive={this.props.navigationActive} user={this.props.user} />
          <main className="main">
            <Feed links={this.props.links} />
            <Sidebar user={this.props.user} />
          </main>
        </div>
      </DocumentTitle>
    )
  }
});