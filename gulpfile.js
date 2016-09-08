//wordpress用
var gulp = require('gulp');
var compass = require('gulp-compass')
var browser = require("browser-sync");
var reload = browser.reload;
//server
gulp.task('browser-sync', function () {
    browser({
        proxy: "localhost.variete/"
    });
});
// compass
gulp.task('compass', function(){
	gulp.src('scss/**/*.scss').pipe(compass({
		config_file: 'config.rb',
		css: '',
		sass: 'scss/'
	}));
});
//task
gulp.task('default', ['browser-sync'], function () {
	gulp.watch('scss/**/*.scss',['compass']);
	gulp.watch([
		//'**/*.html',
		'**/*.css',
		'**/*.jpg',
		'**/*.png',
		'**/*.gif',
		'**/*.js',
		'**/*.php'
	],reload);
});