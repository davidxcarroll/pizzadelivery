
// SASS
// ============================================================

var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/_css'));
});

// JADE
// ============================================================

var jade = require('gulp-jade');
 
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./_public/'));
});

// WATCH
// ============================================================

gulp.task('watch', function () {
  gulp.watch(['./_public/*.html'], ['html']),
  gulp.watch(['./_src/sass/**/*.scss'],['sass']);
});

// LIVE RELOAD
// ============================================================
 
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '_public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./_public/*.html')
    .pipe(connect.reload());
});
 
gulp.task('default', ['connect', 'watch']);