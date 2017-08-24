const gulp = require('gulp');
const sass = require('gulp-sass');

// Logs message
gulp.task('message', function() {
    return console.log('Gulp fungerar');
})

// Kopiera alla .HTML filer
gulp.task('copyhtml', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'));
})

// Kompilera sass 
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
})

// Standardkörning - Default
gulp.task('default', ['copyhtml', 'sass'])

// Gulp Watcher
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['copyhtml']);
    gulp.watch('src/sass/*.scss', ['sass']);
})
