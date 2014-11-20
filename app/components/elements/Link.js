var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  render: function() {
    return (
      <article className="link">
        <p className="link__rank">{this.props.index + 1}</p>
        <a className="link__title" href={this.props.link.url}>{this.props.link.title}</a>
        <p className="link__addedby">
          Added by
          <a href="#" className="link__user">{this.props.link.user}</a>
          <span className="link__time">{moment(this.props.link.createdAt).fromNow()}</span>
        </p>
      </article>
    )
  }
});