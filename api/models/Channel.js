var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema({
  _creator  : Number,
  name : String,
});

module.exports = mongoose.model('Channel', channelSchema);