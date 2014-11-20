var gulp = require('gulp');
var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

var paths = {
  css: ['public/css/**/*.scss'],
  app_js: ['./app.js'],
  js: ['./app/**/*.js'],
};

gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('css', ['clean'], function() {
  return gulp.src(paths.css)
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', ['clean'], function() {
  browserify(paths.app_js)
    .transform(["reactify", { "stripTypes": true }])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'css', 'js']);