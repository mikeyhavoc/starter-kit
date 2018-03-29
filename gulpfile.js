const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');


dest = {
    'sassSrc' : "./src/scss/**/*.scss",
    'sassDest' : "./src/css-pre/",
    'postCss' : "./src/css-pre/**/*.css",
    'postDest' : "./public/css/",
    'maps' : "./public/css/maps/"

}



gulp.task('sass', function () {
    return gulp.src(dest.sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest.sassDest));
    });

gulp.task('autoprefixer', function () {
    return gulp.src(dest.postCss)
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write(dest.maps))
        .pipe(gulp.dest(dest.postDest));
    });