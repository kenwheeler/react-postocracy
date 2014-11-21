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
          <div className="account__photo">
            <img src={this.props.user.profilePhoto && this.props.user.profilePhoto.replace('normal','bigger')}/>
          </div>
          <div className="account__user">
            <p className="account__displayName">{this.props.user.displayName}</p>
            <p className="account__userName">{this.props.user.username}</p>
            <div className="account__subactions">
              <a href="#">Profile</a>
              <a href="#">Friends</a>
              <a href="#">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
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