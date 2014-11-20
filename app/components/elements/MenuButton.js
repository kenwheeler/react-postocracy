var React = require('react');

module.exports = React.createClass({
  handleClick: function(event){
    event.nativeEvent.stopPropagation();
    event.nativeEvent.preventDefault();
    this.props.onClick && this.props.onClick();
  },
  render: function() {
    return (
      <button type="button" className="menuButton" onTouchEnd={this.handleClick} onClick={this.handleClick}>
        <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
          <rect y="3" width="24" height="3"  style={styles[this.props.active ? 'active' : 'default'].a} fill="white"/>
          <rect y="12" width="24" height="3" style={styles[this.props.active ? 'active' : 'default'].b} fill="white"/>
          <rect y="21" width="24" height="3" style={styles[this.props.active ? 'active' : 'default'].c} fill="white"/>
        </svg>
      </button>
    )
  }
});

var styles = {
  default: {
    a: {
      transition: "all 200ms ease"
    },
    b: {
      transition: "all 200ms ease"
    },
    c: {
      transition: "all 200ms ease"
    }
  },
  active: {
    a: {
      transform: "rotate(45deg)",
      transformOrigin: "3 10",
      transition: "all 200ms ease",
      webkitTransform: "rotate(45deg)",
      webkitTransformOrigin: "3 10"
    },
    b: {
      opacity: 0,
      transition: "all 200ms ease",
    },
    c: {
      transform: "rotate(-45deg)",
      transformOrigin: "0 16",
      transition: "all 200ms ease",
      webkitTransform: "rotate(-45deg)",
      webkitTransformOrigin: "0 16",
    }
  }
}