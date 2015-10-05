var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [
                 'node_modules/bootstrap-sass/assets/stylesheets'
             ]
        }).on('error', sass.logError))
        .pipe(rename( { suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('fonts', function() {
    gulp.src('node_modules/octicons/octicons/*')
        .pipe(gulp.dest('fonts'));
});

gulp.task('js', function() {
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
        'js/main.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

gulp.task('watch:css', function() {
    gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('watch:js', function() {
    gulp.watch('js/main.js', ['js']);
});

gulp.task('start-server', function() {
    connect.server({ livereload: true });
});

gulp.task('clean', function() {
    return del(['css', 'js', 'fonts']);
});

gulp.task('serve', ['default',  'watch:css', 'watch:js', 'start-server']);
gulp.task('default', ['css', 'js', 'fonts']);