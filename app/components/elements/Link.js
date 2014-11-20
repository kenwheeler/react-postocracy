var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  render: function() {
    return (
      <article className="link">
        <p className="link__rank">
          <a href="#" className="link__upvote"><i className="icon-arrow-up"/></a>
          <span className="link__rankNumber">{this.props.index + 1}</span>
          <a href="#" className="link__downvote"><i className="icon-arrow-down"/></a>
        </p>
        <div className="link__content">
          <a className="link__title" href={this.props.link.url}>{this.props.link.title}</a>
          <p className="link__addedby">
            Added  <span className="link__time">{moment(this.props.link.createdAt).fromNow()}</span> by <a href="#" className="link__user">{this.props.link.user}</a>
          </p>
          <div className="link__actions">
            <a href="#" className="link__action">{this.props.link.commentCount} comments</a>
            <a href="#" className="link__action">share</a>
            <a href="#" className="link__action">save</a>
          </div>
        </div>
      </article>
    )
  }
});