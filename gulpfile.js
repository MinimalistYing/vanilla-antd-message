const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['ie >= 10', 'last 5 versions'] })
const LessPluginCleanCSS = require('less-plugin-clean-css')
const cleancss = new LessPluginCleanCSS({ advanced: true })

gulp.task('compilejs', () => gulp.src('./index.js').pipe(babel()).pipe(uglify()).pipe(gulp.dest('dist')))

gulp.task('compileless', () => (
	gulp.src('./style.less')
		.pipe(less({plugins: [autoprefix, cleancss]}))
		.pipe(gulp.dest('dist')
)))

gulp.task('default', ['compilejs', 'compileless'])