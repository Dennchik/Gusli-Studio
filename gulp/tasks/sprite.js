//* Importing modules   
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
//* Sprite - Task
export function sprite() {
	return $.gulp.src($.path.sprite.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'sprite',
				message: error.message
			}))
		}))
		.pipe(svgmin($.app.svgMin))
		.pipe(cheerio($.app.cheerio.run))
		// .pipe($.gul.svgstore({ inlineSvg: true }))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite($.app.svgSprite))
		.pipe($.gulp.dest($.path.sprite.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(Sprite)' })));
}

