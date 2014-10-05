var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('build', ['js:build'])

gulp.task('js:build', function () {
  return gulp.src(['ng/**/module.js', 'ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
})
