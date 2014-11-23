var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var DocumentTitle = require('react-document-title');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <DocumentTitle title='postocracy | new channel'>
        <section className="main__feed main__feed--login">
          <h2>Sign In</h2>
          <p>This action requires you to be signed in!</p>
          <a href="/login" className="action__button">Login with Twitter</a>
        </section>
      </DocumentTitle>
    )
  }
});