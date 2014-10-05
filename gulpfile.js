var fs = require('fs')
var gulp = require('gulp')

fs.readdirSync('./gulp').forEach(function (module) {
  require('./gulp/' + module)
})

gulp.task('build', ['js:build', 'css:build'])
gulp.task('watch', ['js:watch', 'css:watch'])
