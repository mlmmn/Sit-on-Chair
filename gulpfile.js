var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('style'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
