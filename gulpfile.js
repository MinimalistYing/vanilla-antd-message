const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const LessPluginCleanCSS = require('less-plugin-clean-css')

gulp.task('compilejs', () => gulp.src('./index.js').pipe(babel()).pipe(uglify()).pipe(gulp.dest('dist')))

gulp.task('compileless', () => (
	gulp.src('./style.less')
		.pipe(less({plugins: [
			new LessAutoprefix({ browsers: ['ie >= 10', 'last 5 versions'] }),
			new LessPluginCleanCSS({ advanced: true })
		]}))
		.pipe(gulp.dest('dist')
)))

gulp.task('default', ['compilejs', 'compileless'])