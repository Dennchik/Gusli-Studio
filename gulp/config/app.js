import { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import pugbem from 'gulp-pugbem';
import TerserPlugin from 'terser-webpack-plugin';


const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const app = {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						keep_fnames: true, // сохраняем имена функций
						keep_classnames: true, // сохраняем имена классов
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
			runtimeChunk: 'single',
		},

		entry: {
			main: {
				import: ['./#src/js/main.js'],
				filename: '[name].min.js'
			},
			index: {
				import: ['./#src/js/index.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			about: {
				import: ['./#src/js/about.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			services: {
				import: ['./#src/js/services.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			sound: {
				import: ['./#src/js/sound.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			musician: {
				import: ['./#src/js/musician.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			'sound-recording': {
				import: ['./#src/js/sound-recording.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			arrangement: {
				import: ['./#src/js/arrangement.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			//! depend On - vendors
			'react-vendors': {
				import: ['react', 'react-dom', 'react-router-dom', 'prop-types']
			},

			'anime-vendors': {
				import: ['gsap', 'gsap/ScrollSmoother', 'gsap/ScrollTrigger']
			},

			'swiper-bundle': { import: ['swiper/bundle'] }

		},
		output: {
			filename: 'app/[name].min.js',
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					],
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'   // компилирует Sass в CSS
					]
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			// разрешаем импорт файлов с расширениями .js и .jsx
		},
	},

	scss: {
		outputStyle: 'expanded'
	},
	pug: {
		pretty: true,
		plugins: [pugbem]
	},
	htmlMin: {
		collapseWhitespace: true
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	csso: {
		restructure: true,
		sourceMap: true
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'Android >= 4',
			'last 3 versions',
			'Firefox >= 24',
			'Safari >= 6',
			'Opera >= 12'
		]
	},
	fonter: {
		// formats: ['ttf', 'woff', 'eot', 'svg'],

		formats: ['ttf', 'woff', 'svg'],
	},
	svgMin: {
		js2svg: {
			indent: 4,
			pretty: true
		}
	},
	cheerio: {
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: { xmlMode: true }
	},
	svgSprite: {
		shape: {
			id: {
				separator: '--',
				pseudo: '~',
				whitespace: '_'
			},
			dimension: { // Set maximum dimensions
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: { // Add padding
				padding: 0
			},
			transform: [{
				svgo: {
					plugins: [
						'cleanupAttrs',
						'convertColors',
						'removeEmptyAttrs'
					]
				}
			}],
		},
		mode: {
			defs: {
				dest: './',
				sprite: './sprite.svg',
			},
		},
	},
	imageMin: (
		[
			svgo({
				plugins: [
					{ optimizationLevel: 5 },
					{ progessive: true },
					{ interlaced: true },
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: false },
					{ cleanupIDs: false }
				],
			}),
			gifsicle({ interlaced: true }),
			optipng({ optimizationLevel: 3 }),
			mozjpeg({ quality: 75, progressive: true }),
		]),
	include: {
		prefix: '@@',
		basepath: '@#src'
	},
}; 