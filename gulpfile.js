const { src, dest, series, watch } = require('gulp');

// filePaths
const filePath = {
	cssPath: './build/src/sass/**/*.scss',
	scriptPath: './build/src/javascript/**/*.js',
};

// styles
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

const compileStyles = () => {
	return src(filePath.cssPath)
		.pipe(sass())
		.pipe(prefixer('last 2 versions'))
		.pipe(cssMinify())
		.pipe(dest('./build/dest/css/'));
};

// script
const jsMinify = require('gulp-terser');

const minifyScripts = () => {
	return src(filePath.scriptPath)
		.pipe(jsMinify())
		.pipe(dest('./build/dest/javascript/'));
};

// watchTask
const watchTask = () => {
	watch(filePath.cssPath, compileStyles);
	watch(filePath.scriptPath, minifyScripts);
};

exports.default = series(compileStyles, minifyScripts, watchTask);
