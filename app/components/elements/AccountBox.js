var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    var actions, content;
    if(this.props.user.length === 0) {
      actions = (
        <div className="account__actions">
          <a href="/login" className="account__action">Login with Twitter</a>
        </div>
      )
      content = ""
    } else {
      actions = ""
      content = (
        <div className="account__body">
          <img className="account__photo" src={this.props.user.profilePhoto}/>
        </div>
      )
    }
    return (
      <div className="accountBox">
          {content}
          {actions}
      </div>
    )
  }
});