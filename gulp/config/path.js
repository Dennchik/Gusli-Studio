export const pathSrc = '#src';
export const pathDest = 'build';

export const path = {
	root: pathDest,

	json: {
		fileName: 'data.json',
		src: pathSrc + '/data/*.json',
		watch: pathSrc + '/data/*.json',
		dest: pathSrc + '/data/temp',
		readFile: pathSrc + '/data/temp/data.json'
	},
	pug: {
		src: pathSrc + '/pug/pages/**/*{.pug,jade}',
		watch: pathSrc + '/pug/**/*.{pug,jade}',
		dest: pathDest
	},
	scss: {
		src: pathSrc + '/scss/*.{sass,scss}',
		watch: [pathSrc + '/scss/**/*.{sass,scss}',
			'!' + pathSrc + '/scss/app/**/*.{sass,scss}'],
		dest: pathDest + '/css',
	},
	js: {
		src: pathSrc + '/js/*.js',
		watch: pathSrc + '/js/**/*.{js,scss}',
		dest: pathDest + '/js'
	},
	react: {
		src: pathSrc + '/js/**/*.{jsx}',
		watch: pathSrc + '/js/**/*.{jsx,scss}',
		dest: pathDest + '/js/app/'
	},
	image: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico,mp4,mv4,mp3}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico,,mp4,mv4,mp3}',
		dest: pathDest + '/img/',
	},
	sprite: {
		src: pathSrc + '/img/sprites/**/*.svg',
		watch: pathSrc + '/img/sprites/**/*.svg',
		dest: pathDest + '/img/sprites'
	},
	fonts: {
		src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts'
	},
	fontsStyle: {
		src: pathSrc + '/scss/core/_fonts.scss',
		watch: pathSrc + '/scss/**/**.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts/',
	}
}; 