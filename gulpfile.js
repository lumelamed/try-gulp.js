var gulp = require('gulp');

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

