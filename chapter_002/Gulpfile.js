const gulp = require('gulp');
const babel = require('gulp-babel');    

gulp.task('default', function() {
    // place code for your default task here
    // Node source
    gulp.src("test.js")
        .pipe(babel())
        .pipe(gulp.dest("chapter_002/dist"));
    // browser source
    gulp.src("test.js")
        .pipe(babel())
        .pipe(gulp.dest("chapter_002/dist01"));
}); 
