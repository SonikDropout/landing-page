const gulp = require('gulp'),
  sass = require('gulp-sass');

const styles = () => gulp.src('./src/css/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/css'));

const skins = () => gulp.src('./src/css/sass/skins/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/css/skins'));

const watch = () => {
  gulp.watch('./src/css/sass/*.scss', styles);
  gulp.watch('./src/css/sass/skins/*.scss', skins);
}

exports.default = watch;