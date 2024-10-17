//* Importing modules  
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
//* Converting and compressing images
export function image() {
	return $.gulp.src($.path.image.src)
		.pipe($.plumber({
			errorHandler: $.notify.onError(error => ({
				title: 'Image',
				message: error.message
			}))
		}))
		.pipe($.newer($.path.image.dest))
		.pipe($.size({ title: 'До сжатия - (Images):' }))
		.pipe(webp())
		.pipe($.gulp.dest($.path.image.dest))
		.pipe($.gulp.src($.path.image.src))
		.pipe($.newer($.path.image.dest))
		.pipe($.gulpIf($.app.isProd, imagemin($.app.imageMin.svgo)))
		.pipe($.size({ title: 'После сжатия - (Images):' }))
		.pipe($.gulp.dest($.path.image.dest))
		.pipe($.gulpIf($.app.isDev, $.debug({ title: '(Image)' })));
}
