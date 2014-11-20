var React = require('react');
var Link = require('react-router').Link;
var MenuButton = require('../elements/MenuButton');
var UIActions = require('../../actions/UIActions');

module.exports = React.createClass({
  handleClick: function(){
    UIActions.setNavState(this.props.navigationActive ? false : true);
  },
  render: function() {
    return (
      <nav>
        <ul className={this.props.navigationActive ? 'active' : ''}>
          <li><Link to="home" onClick={this.handleClick}>Home</Link></li>
        </ul>
        <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
      </nav>
    )
  }
});