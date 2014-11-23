var React = require('react');
var MenuButton = require('../elements/MenuButton');
var SearchBox = require('../elements/SearchBox');
var FilterBar = require('../elements/FilterBar');
var UIActions = require('../../actions/UIActions');
var Link = require('react-router').Link;

module.exports = React.createClass({
  handleClick: function(){
    UIActions.setNavState(this.props.navigationActive ? false : true);
  },
  render: function() {
    return (
      <header className="siteHeader">
        <div className="contain">
          <h1 className="siteHeader__title"><Link to="app">postocracy</Link></h1>
          <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
          <FilterBar />
          <SearchBox />
        </div>
      </header>
    )
  }
});