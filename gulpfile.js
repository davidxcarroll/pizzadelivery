
// SASS
// ============================================================

var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/static/_css'));
});

// WATCH
// ============================================================

gulp.task('watch', function () {
  gulp.watch(['./_public/static/*.html'], ['html']),
  gulp.watch(['./_src/sass/**/*.scss'],['sass']);
});

// LIVE RELOAD
// ============================================================
 
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '_public/static',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./_public/static/*.html')
    .pipe(connect.reload());
});
 
gulp.task('default', ['connect', 'watch']);