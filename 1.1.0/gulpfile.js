var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', function(){
    gulp.src('index.css')
        .pipe($.minifyCss())
        .pipe($.rename('index.min.css'))
        .pipe(gulp.dest('./'));
});
