//* -------- Объявление анонимной само вызывающейся функции (IIFE) -------------
export default (function () {
	const pi = Math.PI;
	const pi2 = 2 * Math.PI;

	// Объявление класса Waves
	class Waves {
		// Конструктор класса Waves
		constructor(holder, options) {
			const Waves = this;

			Waves.options = extend(options || {}, {
				resize: false,
				rotation: 45,
				waves: 5,
				width: 100,
				hue: [11, 14],
				amplitude: 0.5,
				background: true,
				preload: true,
				speed: [0.004, 0.008],
				debug: false,
			});

			// Массив волн
			Waves.waves = [];

			// Элемент-родитель
			Waves.holder = document.querySelector(holder);

			// HTML5 Canvas
			Waves.canvas = document.createElement('canvas');
			Waves.ctx = Waves.canvas.getContext('2d');
			Waves.holder.appendChild(Waves.canvas);

			// Начальный цвет
			Waves.hue = Waves.options.hue[0];
			Waves.hueFw = true;

			// Объект для хранения статистики
			Waves.stats = new Stats();

			// Инициализация
			Waves.resize();
			Waves.init(Waves.options.preload);

			// Обработчик события изменения размера окна
			if (Waves.options.resize)
				window.addEventListener('resize', function () {
					Waves.resize();
				}, false);
		}

		// Метод инициализации
		init(preload) {
			const Waves = this;
			const options = Waves.options;

			for (let i = 0; i < options.waves; i++)
				Waves.waves[i] = new Wave(Waves);

			if (preload) Waves.preload();
		}

		// Метод предварительной загрузки
		preload() {
			const Waves = this;
			const options = Waves.options;

			for (let i = 0; i < options.waves; i++) {
				Waves.updateColor();
				for (let j = 0; j < options.width; j++) {
					Waves.waves[i].update();
				}
			}
		}

		// Метод отрисовки
		render() {
			const Waves = this;
			const ctx = Waves.ctx;

			Waves.updateColor();
			Waves.clear();

			if (Waves.options.debug) {
				ctx.beginPath();
				ctx.strokeStyle = '#f00';
				ctx.arc(Waves.centerX, Waves.centerY, Waves.radius, 0, pi2);
				ctx.stroke();
			}

			if (Waves.options.background) {
				Waves.background();
			}

			each(Waves.waves, function (wave) {
				wave.update();
				wave.draw();
			});
		}

		// Метод анимации
		animate() {
			const Waves = this;

			Waves.render();

			window.requestAnimationFrame(Waves.animate.bind(Waves));
		}

		// Метод очистки холста
		clear() {
			const Waves = this;
			Waves.ctx.clearRect(0, 0, Waves.width, Waves.height);
		}

		// Метод отрисовки фона
		background() {
			const Waves = this;
			const ctx = Waves.ctx;

			const gradient = Waves.ctx.createLinearGradient(0, 0, 0, Waves.height);
			gradient.addColorStop(0, '#070613');
			gradient.addColorStop(1, Waves.color);

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, Waves.width, Waves.height);
		}

		// Метод изменения размера холста
		resize() {
			const Waves = this;
			const width = Waves.holder.offsetWidth;
			const height = Waves.holder.offsetHeight;
			Waves.scale = window.devicePixelRatio || 1;
			Waves.width = width * Waves.scale;
			Waves.height = height * Waves.scale;
			Waves.canvas.width = Waves.width;
			Waves.canvas.height = Waves.height;
			Waves.canvas.style.width = '100%';
			Waves.canvas.style.height = '100%';
			Waves.radius = Math.sqrt(
				Math.pow(Waves.width, 2) + Math.pow(Waves.height, 2)) / 2;
			Waves.centerX = Waves.width / 2;
			Waves.centerY = Waves.height / 2;
		}

		// Метод изменения цвета
		updateColor() {
			const Waves = this;

			// интенсивность изменения цвета
			Waves.hue += (Waves.hueFw) ? 0.01 : -0.01;

			if (Waves.hue > Waves.options.hue[1] && Waves.hueFw) {
				Waves.hue = Waves.options.hue[1];
				Waves.hueFw = false;
			} else if (Waves.hue < Waves.options.hue[0] && !Waves.hueFw) {
				Waves.hue = Waves.options.hue[0];
				Waves.hueFw = true;
			}

			const a = Math.floor(127 * Math.sin(0.3 * Waves.hue) + 128);
			const b = Math.floor(127 * Math.sin(0.3 * Waves.hue + 2) + 128);
			const c = Math.floor(127 * Math.sin(0.3 * Waves.hue + 4) + 128);

			Waves.color = 'rgba(' + a + ',' + b + ',' + c + ', 0.1)';
		}
	}

	// Объявление класса Wave
	class Wave {
		// Конструктор класса Wave
		constructor(Waves) {
			const Wave = this;
			const speed = Waves.options.speed;

			Wave.Waves = Waves;
			Wave.Lines = [];

			Wave.angle = [
				rnd(pi2),
				rnd(pi2),
				rnd(pi2),
				rnd(pi2)
			];

			Wave.speed = [
				rnd(speed[0], speed[1]) * rnd_sign(),
				rnd(speed[0], speed[1]) * rnd_sign(),
				rnd(speed[0], speed[1]) * rnd_sign(),
				rnd(speed[0], speed[1]) * rnd_sign(),
			];

			return Wave;
		}

		// Метод обновления
		update() {
			const Wave = this;
			const Lines = Wave.Lines;
			const color = Wave.Waves.color;

			Lines.push(new Line(Wave, color));

			if (Lines.length > Wave.Waves.options.width) {
				Lines.shift();
			}
		}

		// Метод отрисовки
		draw() {
			const Wave = this;
			const Waves = Wave.Waves;

			const ctx = Waves.ctx;
			const radius = Waves.radius;
			const radius3 = radius / 3;
			const x = Waves.centerX;
			const y = Waves.centerY;
			const rotation = dtr(Waves.options.rotation);
			const amplitude = Waves.options.amplitude;
			const debug = Waves.options.debug;

			const Lines = Wave.Lines;

			each(Lines, function (line, i) {
				if (debug && i > 0) return;

				const angle = line.angle;

				const x1 = x - radius * Math.cos(angle[0] * amplitude + rotation);
				const y1 = y - radius * Math.sin(angle[0] * amplitude + rotation);
				const x2 = x + radius * Math.cos(angle[3] * amplitude + rotation);
				const y2 = y + radius * Math.sin(angle[3] * amplitude + rotation);
				const cpx1 = x - radius3 * Math.cos(angle[1] * amplitude * 2);
				const cpy1 = y - radius3 * Math.sin(angle[1] * amplitude * 2);
				const cpx2 = x + radius3 * Math.cos(angle[2] * amplitude * 2);
				const cpy2 = y + radius3 * Math.sin(angle[2] * amplitude * 2);

				ctx.strokeStyle = (debug) ? '#77faff' : line.color;

				ctx.beginPath();
				ctx.moveTo(x1, y1);
				ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
				ctx.stroke();

				if (debug) {
					ctx.strokeStyle = '#77faff';
					ctx.globalAlpha = 0.3;

					ctx.beginPath();
					ctx.moveTo(x1, y1);
					ctx.lineTo(cpx1, cpy1);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(x2, y2);
					ctx.lineTo(cpx2, cpy2);
					ctx.stroke();

					ctx.globalAlpha = 1;
				}
			});
		}
	}

	// Объявление класса Line
	class Line {
		// Конструктор класса Line
		constructor(Wave, color) {
			const Line = this;

			const angle = Wave.angle;
			const speed = Wave.speed;

			Line.angle = [
				Math.sin(angle[0] += speed[0]),
				Math.sin(angle[1] += speed[1]),
				Math.sin(angle[2] += speed[2]),
				Math.sin(angle[3] += speed[3])
			];

			Line.color = color;
		}
	}

	// Объявление класса Stats
	class Stats {
		constructor() {
			this.data = [];
		}

		// time() {
		// 	return (performance || Date).now();
		// }

		// log() {
		// 	if (!this.last) {
		// 		this.last = this.time();
		// 		return 0;
		// 	}

		// 	this.new = this.time();
		// 	this.delta = this.new - this.last;
		// 	this.last = this.new;

		// 	this.data.push(this.delta);
		// 	if (this.data.length > 10)
		// 		this.data.shift();
		// }
	}

	// Глобальная вспомогательная функция для перебора массива
	function each(items, callback) {
		for (let i = 0; i < items.length; i++) {
			callback(items[i], i);
		}
	}

	// Глобальная вспомогательная функция для расширения объекта
	function extend(options, defaults) {
		for (const key in options)
			if (Object.prototype.hasOwnProperty.call(defaults, key))
				defaults[key] = options[key];
		return defaults;
	}

	// Глобальная вспомогательная функция для преобразования градусов в радианы
	function dtr(deg) {
		return deg * pi / 180;
	}

	// Глобальная вспомогательная функция для генерации случайного числа
	function rnd(a, b) {
		if (arguments.length === 1)
			return Math.random() * a;
		return a + Math.random() * (b - a);
	}

	// Глобальная вспомогательная функция для генерации случайного знака
	function rnd_sign() {
		return (Math.random() > 0.5) ? 1 : -1;
	}

	// Использование
	return Waves;
})();