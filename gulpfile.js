let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/*	BASIC TASKS  */
gulp.task('hola', async function() {
	console.log('Hola');
});

gulp.task('mundo', async function() {
	console.log('Mundo');
});

gulp.task('default', gulp.series('hola', 'mundo'));

gulp.task('callback', function(cb) {
	setTimeout(function() {
		console.log('probando callback');
		cb();
	}, 2000);
});

/*  READ, WRITE, OBSERVE FILES  */
gulp.task('sass', function() {
	return gulp.src('src/style.sass') // Read file
		.pipe(sass()) // Compile SASS (plugin)
		.pipe(gulp.dest('.tmp')) // Save file
		.pipe(reload({ stream: true })); // Send changes to the network
});

gulp.task('watch', function() {
    gulp.watch('src/style.sass', gulp.series('sass'));
});


/* STATIC SERVER */
gulp.task('serve', function() { 
	browserSync.init({
		server: {
			baseDir: ['.tmp', 'src']
		}
	});
});  

// sass task as a dependency to compile before serve
exports.serve = gulp.series(['sass', 'watch', 'serve']);