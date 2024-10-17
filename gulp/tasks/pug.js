import fs from 'fs';
import data from 'gulp-data';
import webpHtml from 'gulp-html-webp';
import htmlmin from 'gulp-htmlmin';
import pug from 'gulp-pug';

//* Task for compiling Pug files to Html files
export function pugJade() {
	return $.gulp.src($.path.pug.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'PUG',
				message: error.message
			}))
		}))
		.pipe(data(function () {
			// return JSON.parse(fs.readFileSync($.path.json.readFile));
			const jsonString = fs.readFileSync($.path.json.readFile).toString();
			return JSON.parse(jsonString);
		}))
		.pipe(pug($.app.pug))
		.pipe($.fileInclude($.app.include))
		.pipe(webpHtml())
		.pipe(htmlmin($.app.htmlMin))
		.pipe($.gulp.dest($.path.pug.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(PugJade)' })));
}