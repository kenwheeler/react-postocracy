var React = require('react');
var MenuButton = require('../elements/MenuButton');
var ActionsList = require('../elements/ActionsList');
var UIActions = require('../../actions/UIActions');

module.exports = React.createClass({
  handleClick: function(){
    UIActions.setNavState(this.props.navigationActive ? false : true);
  },
  render: function() {
    return (
      <header className="siteHeader">
        <div className="contain">
          <h1 className="siteHeader__title">postocracy</h1>
          <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
          <div className="siteHeader__filters">
            <a href="#" className="active">Top</a>
            <a href="#">New</a>
            <a href="#">Controversial</a>
          </div>
          <ActionsList />
        </div>
      </header>
    )
  }
});