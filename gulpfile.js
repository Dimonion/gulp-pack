let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {

	gulp.src('./sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({includePaths: ['./sass/']}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['iOS 7', 'IE 11']
		}))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function() {
	gulp.watch('./Resources/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass:watch']);
