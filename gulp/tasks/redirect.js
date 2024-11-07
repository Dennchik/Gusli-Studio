//* Configuration
export function redirect () {
	return $.gulp.src('./#src/js/_redirects')
	.pipe($.gulp.dest($.path.pug.dest));
}