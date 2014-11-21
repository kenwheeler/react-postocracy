var React = require('react');

var touched = false;

module.exports = React.createClass({
  handleClick: function(event){
    if(event.nativeEvent.type == 'touchend') {
      touched = true;
    } else {
      if(touched == true) {
        touched = false;
        return;
      }
    }
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
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);"
    },
    b: {
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);"
    },
    c: {
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);"
    }
  },
  active: {
    a: {
      transform: "rotate(45deg)",
      transformOrigin: "3 10",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
      webkitTransform: "rotate(45deg)",
      webkitTransformOrigin: "3 10"
    },
    b: {
      opacity: 0,
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
    },
    c: {
      transform: "rotate(-45deg)",
      transformOrigin: "0 16",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
      webkitTransform: "rotate(-45deg)",
      webkitTransformOrigin: "0 16",
    }
  }
}