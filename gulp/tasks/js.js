//* Importing modules  
import webPackStream from 'webpack-stream';

//* JavaScript task
export function js() {
	return $.gulp.src($.path.js.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'JavaScript',
				message: error.message
			}))
		}))
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.init({
			loadMaps: true
		})))
		.pipe($.babel())
		.pipe(webPackStream($.app.webpack))
		.pipe($.fileInclude())
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.write('.', {
			includeContent: false,
		})))
		.pipe($.gulp.dest($.path.js.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(JavaScript)' })));
}