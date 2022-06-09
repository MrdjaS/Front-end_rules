const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const runTimestamp = Math.round(Date.now()/1000);
const open = require('gulp-open');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('lint-css', function lintCssTask() {
    return gulp.src('app/css/**/*.css')
      .pipe(gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
       }));
});

gulp.task('autoprefix', function() {
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

const fontName = 'Icons';
 
gulp.task('iconfont', function(){
  gulp.src(['app/images/*.svg'])
     .pipe(iconfontCss({
        path: 'app/scss/base/_icons_template.scss',
        fontName: fontName,
        targetPath: '../scss/base/_icons.scss',
        fontPath: '../fonts/'
     }))
     .pipe(iconfont({
        fontName: fontName,
        normalize:true,
        fontHeight: 1001
     }))
     .pipe(gulp.dest('app/fonts/'));
});

gulp.task('browser', function(){
  var options = {
    uri: 'localhost:3000',
    app: 'chrome'
  };
  gulp.src('app/index.html')
  .pipe(open(options));
});


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});

