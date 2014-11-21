var React = require('react');
var Link = require('react-router').Link;
var MenuButton = require('../elements/MenuButton');
var UIActions = require('../../actions/UIActions');
var ActionsList = require('../elements/ActionsList');
var ChannelList = require('../elements/ChannelList');
var AccountBox = require('../elements/AccountBox');
var SearchBox = require('../elements/SearchBox');

module.exports = React.createClass({
  render: function() {
    return (
      <nav className={'navigation ' + (this.props.navigationActive ? 'active' : '')}>
        <ActionsList />
        <SearchBox />
        <AccountBox user={this.props.user} />
        <ChannelList />
      </nav>
    )
  }
});