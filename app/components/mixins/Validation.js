var superagent = require('superagent');

module.exports = {
  getInitialState: function(){
    return {
      errors: [],
      valid: true,
    }
  },
  checkRequired: function(val){
    if (val == "") {
      var errors = this.state.errors;
      errors.push("Channel name is required.")
      this.setState({errors: errors, valid: false});
    }
  },
  checkFormat: function(val){
    var test=/^[a-z0-9]+$/i;
    var alphanumeric = !test.exec(val);
    if (alphanumeric && val != "") {
      var errors = this.state.errors;
      errors.push("Only alphanumeric characters are allowed.")
      this.setState({errors: errors, valid: false});
    }
  },
  checkUnique: function(val){
    var self = this;
    superagent
      .get('/api/channel/unique/')
      .query({name: val})
      .end(function(res){
        if(!res.body.unique) {
          var errors = self.state.errors;
          errors.push("Channel name already exists.");
          self.setState({errors: errors, valid: false});
        }
      });
  }
}