var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var ChannelActions = require('../../actions/ChannelActions');
var superagent = require('superagent');

module.exports = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function(){
    return {
      errors: [],
      valid: true,
      channelUnique: true,
    }
  },
  validateForm: function(e){
    return true;
  },
  checkUnique: function(){
    var self = this;
    superagent
      .get('/api/channel/unique/')
      .query({name: self.refs.name.getDOMNode().value})
      .end(function(res){
        self.setState({channelUnique: res.body.unique})
      });
  },
  handleSubmit: function(e){
    var self = this;
    this.errors=[];
    if(this.state.valid)
      superagent
        .post('/api/channel/')
        .send({ name: self.refs.name.getDOMNode().value, description: self.refs.description.getDOMNode().value })
        .end(function(error, res){
          alert(res);
        });
    e.preventDefault();
  },
  render: function() {
    var formErrors = this.state.errors.map(function(error){
      return <span className="channel__error">{error}</span>
    });
    return (
      <section className="main__feed main__feed--form">
        <h2>Create Channel</h2>
        <form name="channel-create" className="channel__form" onSubmit={this.handleSubmit}>
          {formErrors}
          <div className="form__row">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" ref="name" onKeyUp={this.checkUnique} placeholder="Channel Name" autoComplete="off"/>
            <span className="channel__unique">
              {this.state.channelUnique ? <i className="icon-check"/> : <i className="icon-x"/>}
            </span>
          </div>
          <div className="form__row">
            <label htmlFor="description">Description:</label>
            <textarea name="description" ref="description" placeholder="Describe your channel" rows="5"></textarea>
          </div>
          <div className="form__row">
            <button type="submit">Save Channel</button>
          </div>
        </form>
      </section>
    )
  }
});