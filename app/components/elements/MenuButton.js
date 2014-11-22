var React = require('react');

module.exports = React.createClass({
  handleClick: function(event){

    event.preventDefault();

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
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
      transform: "rotate(45deg)",
      transformOrigin: "3px 10px",
      WebkitTransform: "rotate(45deg)",
      WebkitTransformOrigin: "3px 10px",
      MozTransform: "rotate(45deg)",
      MozTransformOrigin: "3px 10px"
    },
    b: {
      opacity: 0,
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
    },
    c: {
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1);",
      transform: "rotate(-45deg)",
      transformOrigin: "0px 16px",
      WebkitTransform: "rotate(-45deg)",
      WebkitTransformOrigin: "0px 16px",
      mozTransform: "rotate(-45deg)",
      mozTransformOrigin: "0px 16px"
    }
  }
}