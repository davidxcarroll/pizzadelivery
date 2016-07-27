
var gulp = require('gulp')

// SASS
// ============================================================

var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// PUG
// ============================================================

var pug = require('gulp-pug');
 
// gulp.task('pug', function buildHTML() {
//   return gulp.src('./views/**/*.pug')
//   .pipe(pug({
//     pretty: true
//   }))
//   .pipe(gulp.dest('./public'))
// });

gulp.task('pug', function() {
  gulp.src('./views/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./public'))
});

// WATCH
// ============================================================

gulp.task('watch', function() {
  gulp.watch(['./views/**/*.pug'], ['pug']),
  gulp.watch(['./src/sass/**/*.scss'],['sass']);
});

// LIVE RELOAD
// ============================================================
 
var connect = require('gulp-connect');

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

