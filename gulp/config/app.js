import { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import pugbem from 'gulp-pugbem';
import TerserPlugin from 'terser-webpack-plugin';


const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const app = {
	isProd: isProd,
	isDev: isDev,

	webpackReact: {
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
		devServer: {
			historyApiFallback: {
				rewrites: [{from: /\//, to: '/404.html'}],
			},
		},
		entry: {


			/* 	index: {
			 import: ['./#src/js/layouts/HomePage.jsx'],
			 dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
			 filename: '[name].min.js'
			 },
			 //! depend On - vendors
			 'react-vendors': {
			 import: ['react', 'react-dom', 'react-router-dom',
			 'prop-types']
			 },
			 'anime-vendors': {
			 import: ['gsap', 'animejs', 'gsap/ScrollSmoother',
			 'gsap/ScrollTrigger']
			 },
			 'swiper-bundle': { import: ['swiper/bundle'] } */

			// dependOn: 'shared',
			// shared: 'lodash',
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
					use: {
						loader: 'babel-loader', // преобразуем JSX в обычный JS
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env'],
						},
					},
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
						'sass-loader' // компилирует Sass в CSS
					]
				},
				{
					test: /\.(png|jpe?g|gif|webp)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images',
								// папка, куда будут сохранены изображения
							},
						},

					]
				}
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			// разрешаем импорт файлов с расширениями .js и .jsx
		},
	},

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
			//! depend On - vendors
			'react-vendors': {
				import: ['react', 'react-dom', 'react-router-dom', 'prop-types']
			},

			'anime-vendors': {
				import: ['gsap', 'gsap/ScrollSmoother', 'gsap/ScrollTrigger']
			},

			'swiper-bundle': {import: ['swiper/bundle']}

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
		parserOptions: {xmlMode: true}
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
					{optimizationLevel: 5},
					{progessive: true},
					{interlaced: true},
					{removeViewBox: false},
					{removeUselessStrokeAndFill: false},
					{cleanupIDs: false}
				],
			}),
			gifsicle({interlaced: true}),
			optipng({optimizationLevel: 3}),
			mozjpeg({quality: 75, progressive: true}),
		]),
	include: {
		prefix: '@@',
		basepath: '@#src'
	},
}; 