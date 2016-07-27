
// SASS
// ============================================================

var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// PUG
// ============================================================

var gulp = require('gulp'),
    pug = require('gulp-jade');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {
    return gulp.src('views/**/*.pug')
        .pipe(pug()) // pipe to pug plugin
        .pipe(gulp.dest('public/'));
});

// WATCH
// ============================================================

gulp.task('watch', function () {
  gulp.watch(['./views/*.pug'], ['pug']),
  gulp.watch(['./public/*.html'], ['html']),
  gulp.watch(['./src/sass/**/*.scss'],['sass']);
});

// LIVE RELOAD
// ============================================================
 
var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});
 
gulp.task('default', ['connect', 'watch', 'pug']);

