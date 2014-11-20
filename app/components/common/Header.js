var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <header className="siteHeader">
        <div className="contain">
          <h1 className="siteHeader__title">postocracy</h1>
          <div class="siteHeader__actions">
            <button className="siteHeader__button" type="button">Log In</button>
          </div>
        </div>
      </header>
    )
  }
});