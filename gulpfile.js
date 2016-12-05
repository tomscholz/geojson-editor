var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");

// Minify and copy JavaScript to js/min
gulp.task('compileCSS', function() {
  return gulp.src('css/styles.css')
      .pipe(cssnano())
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('css/min/'));
});

// Minify and copy CSS to css/min
gulp.task('compileJS', function () {
  return gulp.src('js/editor.js')
      .pipe(uglify())
      .pipe(rename('editor.min.js'))
      .pipe(gulp.dest('js/min/'));

});

// Watch files for changes and recompile
gulp.task('watch', function() {
    gulp.watch('/css/*.css', ['compileCSS']);
    gulp.watch('/js/*.js', ['compileJS']);
});

gulp.task('build', ['compileJS', 'compileCSS']);

gulp.task('default', ['watch']);
