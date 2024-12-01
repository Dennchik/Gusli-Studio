//* Import necessary modules
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sortMediaQueries from 'postcss-sort-media-queries';
import sass from 'gulp-dart-sass';
// import gulpSass from 'gulp-sass'; 
// import * as dartSass from 'sass';
// const sass = gulpSass(dartSass);
//* Task for compiling SCSS files to CSS files
export function scss() {
	return $.gulp.src($.path.scss.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'SCSS',
				message: error.message,
			})),
		}))
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.init({
			loadMaps: true,
		})))
		.pipe($.gulpIf($.app.isDev, $.debug({
			title: '(INIT Source-maps)'
		})))
		// .pipe(sass.sync($.app.scss).on('error', sass.logError))

		.pipe(
			sass.sync({
				outputStyle: $.app.scss.outputStyle,
				quietDeps: $.app.scss.options.sassOptions.quietDeps,
				silenceDeprecations: $.app.scss.silenceDeprecations
			}).on('error', function (err) {
				console.error('Sass error:', err.messageFormatted); // Выводим подробности ошибки
				this.emit('end');
			})
		)
		// .pipe(postcss([combineMediaQuery]))
		.pipe(postcss([sortMediaQueries()]))
		.pipe($.gulpIf($.app.isProd, autoprefixer($.app.autoprefixer)))
		.pipe($.gulpIf($.app.isProd, $.debug({
			title: '(Autoprefixer)'
		})))
		.pipe($.gulpIf($.app.isProd, $.gulp.dest($.path.scss.dest)))
		.pipe($.gulpIf($.app.isProd, $.size({
			title: 'До сжатия - (CSS):'
		})))
		.pipe(csso($.app.csso))
		.pipe(rename($.app.renameScss))
		.pipe($.gulpIf($.app.isProd, $.size({
			title: 'После сжатия - (CSS):'
		})))
		.pipe($.gulpIf($.app.isDev, $.sourcemaps.write('.')))
		.pipe($.gulpIf($.app.isDev, $.debug({
			title: ' (WRITE Source-Maps)'
		})))
		.pipe($.gulp.dest($.path.scss.dest));
}
