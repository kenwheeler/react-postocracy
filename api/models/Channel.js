var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema({
  _creator    : {type: mongoose.Schema.Types.ObjectId, required: true},
  name        : {type: String, unique: true, required: true},
  slug        : {type: String, unique: true, required: true},
  description : {type: String, required: true}
});

module.exports = mongoose.model('Channel', channelSchema);