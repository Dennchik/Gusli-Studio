//* Importing modules  
import merge from 'gulp-merge-json';
import * as filePath from 'path'; // Добавляем модуль 'path' для работы с путями

//* Json - task
export function json() {
	return $.gulp.src($.path.json.src)
		.pipe(merge({
			fileName: $.path.json.fileName,
			edit: (json, file) => {
				let filename = filePath.basename(file.path), // Используем методы 'path'
					primaryKey = filename.replace(filePath.extname(filename), '');
				let data = {};
				data[primaryKey.toLowerCase()] = json;
				return data;
			}
		}))
		.pipe($.gulp.dest($.path.json.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(JSON)' })));
}
