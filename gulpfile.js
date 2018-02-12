const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('index.html', reload)
  gulp.watch('style.css', ['css'])
  gulp.watch('chart.js', ['minify'])
})

gulp.task('minify', () => {
  gulp.src('chart.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename("chart.min.js"))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
})

gulp.task('css', () => {
  return gulp.src('./style.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
})