var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var plumber = require('gulp-plumber')

gulp.task('build', ['js:build'])
gulp.task('watch', ['js:watch'])

gulp.task('js:build', function () {
  return gulp.src(['ng/**/module.js', 'ng/**/*.js'])
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
})

gulp.task('js:watch', ['js:build'], function () {
  gulp.watch('ng/**/*.js', ['js:build'])
})
