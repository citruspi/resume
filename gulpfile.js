var gulp = require('gulp');
var usemin = require('gulp-usemin');
var minify = require('gulp-minify-css');

gulp.task('build', function(){
    gulp.src('src/resume.html')
        .pipe(usemin({
            css: [minify(), 'concat'],
        }))
        .pipe(gulp.dest('dist'));
    gulp.src('src/vendor/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default', ['build']);
