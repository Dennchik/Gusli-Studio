//* Importing modules 
// noinspection JSUnusedGlobalSymbols

import browserSync from 'browser-sync';
import gulp from 'gulp';

import babel from 'gulp-babel';
import debug from 'gulp-debug';
import fileInclude from 'gulp-file-include';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';

//* Configuration options
import { app } from './gulp/config/app.js';
import { path } from './gulp/config/path.js';
//* Global variables;
global.$ = {
	path: path,
	app: app,
	gulp: gulp,
	sourcemaps: sourcemaps,
	browserSync: browserSync,
	plumber: plumber,
	notify: notify,
	debug: debug,
	newer: newer,
	babel: babel,
	fileInclude: fileInclude,
	size: size,
	gulpIf: gulpIf,

};
//* Run - Tasks
import { clear, clearFonts } from './gulp/tasks/clear.js';
import { fonts } from './gulp/tasks/fonts.js';
import { fontsStyle } from './gulp/tasks/fontStyle.js';
import { image } from './gulp/tasks/image.js';
import { js } from './gulp/tasks/js.js';
import { json } from './gulp/tasks/json.js';
import { pugJade } from './gulp/tasks/pug.js';
import { react } from './gulp/tasks/react.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { sprite } from './gulp/tasks/sprite.js';
//* Watcher
const change = gulp.series(clearFonts, fonts, fontsStyle);
const changejson = gulp.series(json, pugJade);

function reload(done) {
	browserSync.reload();
	done();
}

const watcher = () => {
	gulp.watch(path.js.watch, gulp.series(js, reload));
	gulp.watch(path.pug.watch, pugJade).on('all', browserSync.reload);
	gulp.watch(path.json.watch, changejson).on('all', browserSync.reload);
	gulp.watch(path.json.readFile, pugJade).on('all', browserSync.reload);
	gulp.watch(path.react.watch, gulp.series(react, reload));
	gulp.watch(path.scss.watch, gulp.series(scss, reload));
	gulp.watch(path.image.watch, image).on('all', browserSync.reload);
	gulp.watch(path.sprite.watch, sprite).on('all', browserSync.reload);
	gulp.watch(path.fonts.watch, change).on('all', browserSync.reload);
	gulp.watch(path.fontsStyle.watch, fontsStyle).on('all', browserSync.reload);

};

const end = gulp.series(
	clear, clearFonts, json,
	gulp.parallel(scss, js, react, pugJade, fonts, image, sprite), fontsStyle,
);
const dev = gulp.series(end, gulp.parallel(watcher, server));
//* Call back
export {
	clear,
	clearFonts,
	fonts,
	fontsStyle,
	image,
	js,
	json,
	pugJade,
	react,
	scss,
	server,
	sprite
};
//* Default Task
export default app.isProd ? end : dev;

