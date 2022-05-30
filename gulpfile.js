const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulpStylelint = require('gulp-stylelint');
const autoprefixer = require('gulp-autoprefixer');
const iconfont = require('gulp-iconfont');
const runTimestamp = Math.round(Date.now()/1000);

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

gulp.task('iconfont', function() {
    return gulp.src(['app/images/*.svg'])
    .pipe(iconfont({
      fontName: 'myfont',
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff'],
      timestamp: runTimestamp,
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('app/fonts/'));       
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});

