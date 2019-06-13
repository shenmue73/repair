const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');


function styles() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./dist/css'))
}

gulp.task('styles', styles);

function movejs() {
  return gulp.src('js/*.js')
    
    .pipe(gulp.dest('./dist/js'))
}

gulp.task('movejs', movejs);

function minify() {
  return gulp.src('*.html')
    .pipe(htmlmin({ 
      collapseWhitespace: true 
    }))
    .pipe(gulp.dest('./dist/'))
}
gulp.task('minify', minify);

function fonts() {
  return gulp.src('fonts/**/*')
    
    .pipe(gulp.dest('./dist/fonts'))
}

gulp.task('fonts', fonts);

gulp.task('tinypng', function (done) {
  gulp.src('img/*.{png,jpg,jpeg}')
      .pipe(tinypng({
          key: 'kjovmcau82DnHXdHdcfq0bITQah9UefC',
         
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});







