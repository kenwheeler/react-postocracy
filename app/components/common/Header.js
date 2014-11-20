var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <header className="siteHeader">
        <div className="contain">
          <h1 className="siteHeader__title">postocracy</h1>
          <div className="siteHeader__filters">
            <a href="#" className="active">Top</a>
            <a href="#">New</a>
            <a href="#">Controversial</a>
          </div>
          <div className="siteHeader__actions">
            <a href="#"><i className="icon-magnifying-glass"/></a>
            <a href="#"><i className="icon-mail"/></a>
            <a href="#"><i className="icon-torso"/></a>
            <a href="#"><i className="icon-widget"/></a>
          </div>
        </div>
      </header>
    )
  }
});