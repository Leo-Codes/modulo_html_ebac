const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compile_sass(){
    console.log('Compiling Sass');
    return gulp.src('./source/styles/styles.scss')
    .pipe(sourcemaps.init())
       .pipe(sass())
       .pipe(sourcemaps.write('./maps'))
       .pipe(gulp.dest('./build/styles'));
}
function compress_image(){
    console.log('Compressing Images');
    return gulp.src('./source/images/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./build/images'));
}
function compress_js(){
    console.log('Compressing JavaScript');
    return gulp.src('./source/scripts/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./build/scripts'));
}


exports.default = gulp.parallel(compile_sass, compress_image, compress_js);

