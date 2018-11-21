const gulp = require('gulp')
const babel = require('gulp-babel')
const less = require('gulp-less')

gulp.task('compilejs', () => gulp.src('./index.js').pipe(babel()).pipe(gulp.dest('dist')))

gulp.task('compileless', () => gulp.src('./style.less').pipe(less()).pipe(gulp.dest('dist')))

gulp.task('default', ['compilejs', 'compileless'])