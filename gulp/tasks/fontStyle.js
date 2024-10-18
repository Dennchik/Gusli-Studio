//* Importing modules
import fs from 'fs';
const cb = () => { };

export function fontsStyle(done) {
	let filePath = $.path.fontsStyle.src;

	//? Проверка на существование файла
	fs.readFile(filePath, 'utf8', (err) => {
		if (err) {
			console.error(`Ошибка при чтении файла: ${filePath}`, err);
			return done();
		}
		//? Очищаем содержимое файла и добавляем строку импорта 
		fs.writeFile(filePath, '@use "variables.scss" as *;\r\n@use "mixins.scss" as *;\r\n', cb);
		//? Чтение директории со шрифтами
		fs.readdir($.path.fontsStyle.dest, (err, items) => {
			if (err) {
				console.error('Ошибка при чтении директории с шрифтами:', err);
				return done();
			}
			if (items && items.length > 0) {
				let c_fontName = '';
				items.forEach(item => {
					let fontName = item.split('.')[0];
					if (c_fontName !== fontName) {
						//? Добавляем правило для каждого нового шрифта
						fs.appendFile(
							filePath,
							`@include font-face("${fontName}", "${fontName}", 400, "normal");\r\n`,
							cb
						);
					}
					c_fontName = fontName;
				});
			}
			done();
		});
	});
}
