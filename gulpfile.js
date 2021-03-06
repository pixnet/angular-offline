var gulp = require('gulp');

var gutil  = require('gulp-util');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

var paths = {
    js: ['angular-offline.js']
};

gulp.task('biuld:js', function() {
    gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(concat('angular-offline.min.js'))
        .pipe(gulp.dest('./dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.start('biuld:js');
    gulp.watch(paths.js[0], ['biuld:js']);
});

gulp.task('default', function() {
    gulp.start('biuld:js');
});