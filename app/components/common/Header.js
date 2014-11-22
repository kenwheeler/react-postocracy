var React = require('react');
var MenuButton = require('../elements/MenuButton');
var SearchBox = require('../elements/SearchBox');
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
          <h1 className="siteHeader__title">postocracy</h1>
          <MenuButton onClick={this.handleClick} active={this.props.navigationActive} />
          <div className="siteHeader__filters">
            <Link to="top">Top</Link>
            <Link to="sort" params={{sort: 'new'}}>New</Link>
            <Link to="sort" params={{sort: 'controversial'}}>Controversial</Link>
          </div>
          <SearchBox />
        </div>
      </header>
    )
  }
});