var gulp = require('gulp')
var less = require('gulp-less')

gulp.task('css:build', function () {
  return gulp.src('css/app.less')
    .pipe(less())
    .pipe(gulp.dest('public'))
})

gulp.task('css:watch', ['css:build'], function () {
  gulp.watch('css/**/*.less', ['css:build'])
})
