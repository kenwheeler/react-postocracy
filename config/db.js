var config = require('./config');
var mongoUrl= process.env.MONGOLAB_URI || config.mongo.url;

module.exports = function(mongoose){
  var connectWithRetry = function() {
    return mongoose.connect(mongoUrl, function(err) {
      if (err) {
        console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
        setTimeout(connectWithRetry, 5000);
      }
    });
  };
  connectWithRetry();
};