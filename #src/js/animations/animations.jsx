import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
//* ------------- Регистрация - ScrollTrigger, ScrollSmoother ------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//* --------------------- Конфигурация - ScrollTrigger -------------------------
ScrollTrigger.normalizeScroll(false);
ScrollTrigger.config({ ignoreMobileResize: true });

//* ----------------------- Создание ScrollTrigger -----------------------------
export function refreshScrollTrigger() {
	return ScrollTrigger.refresh();
}
export function SplitTextFunction() {
	const smoother = ScrollSmoother.get();
	// Находим все элементы с классом `.split-stagger`
	const elements = document.querySelectorAll('.split-stagger');

	elements.forEach((element, index) => {
		// Разбиваем текст на слова и символы для каждого элемента
		let mySplitText = new SplitText(element, { type: 'words,chars' });
		let chars = mySplitText.chars;
		if (index % 2 === 0) {
			// Нечётный элемент: анимация слева направо
			chars.forEach((char, i) => {
				smoother.effects(char, { speed: 1, lag: (i + 1) * 0.01 });
			});
		} else {

			chars.forEach((char, i) => {
				smoother.effects(char, { speed: 1, lag: (chars.length - i) * 0.01 });
			});
		}

	});
}
export function LagTextFunction() {
	const smoother = ScrollSmoother.get();
	smoother.effects('.lag-1', { lag: 2, speed: 1 });
	smoother.effects('.lag-2', { lag: 2, speed: 1.2 });
	smoother.effects('.col-1', { lag: 1.5, speed: 0.8 });
	smoother.effects('.col-2', { lag: 1.5, speed: 1 });
}

//* -------------------- Уничтожение ScrollSmoother ----------------------------
// export function destroySmoother(initSmoother) {
// 	if (initSmoother) {
// 		/* Уничтожаем экземпляр ScrollSmoother при размонтировании */
// 		initSmoother.kill();
// 	}
// }

//* ----------------------------------------------------------------------------
export function initSectionTriggerMove(trigger, targets) {
	ScrollTrigger.create({
		trigger: trigger,
		/* Начинаем событие, когда верхняя граница элемента-1 находится на 100px
		 ниже верха окна браузера*/
		start: 'top center',
		endTrigger: trigger, //* Конец события - конец документа
		/*Конец событие когда верхняя граница элемента 1 достигнет верха окна
		 браузера*/
		end: 'bottom center',
		toggleClass: {
			targets: targets,
			className: '_active'
		},
		// markers: true
	});
}

//* ----------------------------------------------------------------------------
export function tlFooterHorizontal() {
	const tlHorizontal = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 2,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});

	tlHorizontal.from(
		'.el-4',
		{
			y: 150,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=0.5',
	);

	tlHorizontal.from(
		'.el-5',
		{
			y: 350,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);

	tlHorizontal.from(
		'.contacts__items',
		{
			x: 450,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlFooterParallel() {
	const tlParallel = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom+=300',
			scrub: 2,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});
	tlParallel.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});

	tlParallel.from(
		'.el-2',
		{
			x: window.innerWidth <= 680 ? 350 : 0,
			y: window.innerWidth > 680 ? 150 : 0,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);

	tlParallel.from(
		'.el-3',
		{
			x: window.innerWidth <= 680 ? -350 : window.innerWidth > 680 ? 350 : 0,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlServices1() {
	const endValue =
		window.innerWidth >= 490 ? 'bottom bottom+=70' : 'bottom bottom+=150';
	const tlServices1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__content',
			start: 'top bottom-=50',
			endTrigger: '.offer-container__content', // end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});
	tlServices1.from('.sr-1', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.inOut',
	});
	tlServices1.from(
		'.sr-2',
		{
			x: 150,
			duration: 1,
			opacity: 0,
			ease: 'sine.inOut',
		},
		'-=1',
	);
}

//* ----------------------------------------------------------------------------
export function tlServices2() {
	const endValue =
		window.innerWidth >= 490 ? 'bottom bottom+=70' : 'bottom bottom+=150';
	const tlServices2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.offer-container__content',
			start: 'top bottom-=300',
			endTrigger: '.offer-container__content', // end: 'bottom bottom+=70',
			end: endValue,
			scrub: 2,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});
	tlServices2.from('.sr-3', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'sine.in',
	});
	tlServices2.from(
		'.sr-4',
		{
			x: 150,
			duration: 1,
			opacity: 0,
			ease: 'sine.in',
		},
		'-=1',
	);
}
//* ------------ Плавное появление заголовков (Анимация Titles) ----------------
export function animateTitles(element, trigger, endTrigger, start, end) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: trigger,
			start: `top-=100 bottom-${start}`,
			endTrigger: endTrigger,
			end: `top-=100 bottom-${end}`,
			toggleActions: 'play none none reverse', // markers: true,
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		y: 100,
		duration: 1, // Продолжительность смещения
		ease: 'power1.out', // Мягкая анимация
	});

	// Анимация для прозрачности с большей продолжительностью
	timeline.from(
		element,
		{
			opacity: 0,
			duration: 2, // Увеличиваем продолжительность для opacity
			ease: 'power1.out', // Мягкая анимация
		},
		'< ',
	); // "<" синхронизирует начало обеих анимаций
}

//* ----------------------- Создание ScrollSmoother ----------------------------
import Stats from 'stats.js';

export function wavesAnimation() {
	console.log('Запуск анимации...');

	(function () {
		var pi = Math.PI;
		var pi2 = 2 * Math.PI;

		// Функция для объединения объектов (аналог extend)
		function extend(target, source) {
			for (var key in source) {
				if (source.hasOwnProperty(key)) {
					target[key] = source[key];
				}
			}
			return target;
		}

		// Конструктор Waves
		function Waves(holder, options) {
			var Waves = this;

			if (!holder) return console.error('Element not found');

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
				debug: false
			});

			Waves.waves = [];
			Waves.holder = document.querySelector(holder);

			if (!Waves.holder) {
				return console.error('Holder element not found');
			}

			Waves.canvas = document.createElement('canvas');
			Waves.ctx = Waves.canvas.getContext('2d');
			Waves.holder.appendChild(Waves.canvas);

			console.log('Canvas добавлен в holder');

			Waves.hue = Waves.options.hue[0];
			Waves.hueFw = true;
			Waves.stats = new Stats();

			Waves.resize();
			Waves.init(Waves.options.preload);

			if (Waves.options.resize)
				window.addEventListener('resize', function () {
					Waves.resize();
				}, false);
		}

		// Основные методы Waves (resize, init, preload и т.д.)

		Waves.prototype.resize = function () {
			var Waves = this;
			var width = Waves.holder.offsetWidth;
			var height = Waves.holder.offsetHeight;
			Waves.scale = window.devicePixelRatio || 1;
			Waves.width = width * Waves.scale;
			Waves.height = height * Waves.scale;
			Waves.canvas.width = Waves.width;
			Waves.canvas.height = Waves.height;
			Waves.canvas.style.width = width + 'px';
			Waves.canvas.style.height = height + 'px';
			Waves.radius = Math.sqrt(Math.pow(Waves.width, 2) + Math.pow(Waves.height, 2)) / 2;
			Waves.centerX = Waves.width / 2;
			Waves.centerY = Waves.height / 2;

			console.log(`Размеры канваса: ${Waves.width}x${Waves.height}`);
		};

		Waves.prototype.animate = function () {
			var Waves = this;

			Waves.render();
			window.requestAnimationFrame(Waves.animate.bind(Waves));
		};

		// Проверка вызова анимации
		console.log('Запуск анимации');
		var wavesInstance = new Waves('#holder', {}); // Инициализация

		wavesInstance.animate();  // Запуск анимации
	})();
}





