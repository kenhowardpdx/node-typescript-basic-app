var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['copy-config', 'typescript']);

gulp.task('copy-config', function () {
	return gulp.src('./src/config.json')
		.pipe(gulp.dest('./app/'));
});

gulp.task('typescript', function () {
	var tsResult = gulp.src([
			'./typings/tsd.d.ts',
			'./src/**/*.ts'
		])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject));
	
	return tsResult.js.pipe(sourcemaps.write({ sourceRoot: '../src' }))
		.pipe(gulp.dest('./app/'));
});