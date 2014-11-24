var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  _creator  : Number,
  _channel : Number,
  title : String,
  url: String
});

module.exports = mongoose.model('Link', linkSchema);