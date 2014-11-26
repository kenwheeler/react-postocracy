var config = require('./config');
var User = require('../api/models/User')
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });

    passport.use(new TwitterStrategy({
      consumerKey: config.twitter.consumerKey,
      consumerSecret: config.twitter.consumerSecret,
      callbackURL: "/auth/twitter/callback"
    }, function(token, tokenSecret, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
          if (err)
            return done(err);
          if (user) {
            return done(null, user);
          } else {
            var newUser = new User();
            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.username = profile.username;
            newUser.twitter.displayName = profile.displayName;
            newUser.twitter.profilePhoto = profile._json.profile_image_url
            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }));
};