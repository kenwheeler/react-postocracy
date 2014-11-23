var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var Navigation = require('react-router').Navigation;
var ChannelActions = require('../../actions/ChannelActions');
var Validation = require('../mixins/Validation');
var superagent = require('superagent');

module.exports = React.createClass({
  mixins: [PureRenderMixin, Validation, Navigation],
  validateForm: function(e){
    this.setState({errors: [], valid: true});
    this.checkRequired(e.target.value);
    this.checkUnique(e.target.value);
    this.checkFormat(e.target.value);
  },
  handleSubmit: function(e){
    var self = this;
    this.errors=[];
    if(this.state.valid)
      superagent
        .post('/api/channel/')
        .send({ name: self.refs.name.getDOMNode().value, description: self.refs.description.getDOMNode().value })
        .end(function(error, res){
          if(!error){
            var loc = '/channel/' + JSON.parse(res.text).slug;
            console.log(loc);
            self.transitionTo(loc);
          }
        });
    e.preventDefault();
  },
  componentWillMount: function(e){
    if(this.props.user.length === 0) {
      this.transitionTo("loginRequired");
    }
  },
  render: function() {
    var formErrors = this.state.errors.map(function(error, index){
      return <span key={index} className="channel__error"><i className="icon-alert"/>{error}</span>
    });
    return (
      <section className="main__feed main__feed--form">
        <h2>Create Channel</h2>
        <form name="channel-create" className="channel__form" onSubmit={this.handleSubmit}>
          <div className="form__row">
            <label htmlFor="name">Name:</label>
            <input type="text" className={this.state.valid ? "" : "invalid"} name="name" ref="name" onChange={this.validateForm} placeholder="Channel Name" autoComplete="off"/>
            {formErrors}
          </div>
          <div className="form__row">
            <label htmlFor="description">Description:</label>
            <textarea name="description" ref="description" placeholder="Describe your channel" rows="5"></textarea>
          </div>
          <div className="form__row">
            <button type="submit" disabled={this.state.valid ? "" : "disabled"}>Save Channel</button>
          </div>
        </form>
      </section>
    )
  }
});