//* Importing modules
import webPackStream from 'webpack-stream';
//* React - task
export function react() {
	return $.gulp.src($.path.react.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'React',
				message: error.message
			}))
		}))
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.init({ loadMaps: true })))
		.pipe($.babel())
		.pipe(webPackStream($.app.webpackReact))
		.pipe($.fileInclude())
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.write('.', {
			includeContent: false,
		})))
		.pipe($.gulp.dest($.path.react.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(React)' })));
}