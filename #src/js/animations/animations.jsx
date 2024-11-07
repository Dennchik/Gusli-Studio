import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//* ------------- Регистрация - ScrollTrigger, ScrollSmoother ------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//* --------------------- Конфигурация - ScrollTrigger -------------------------
ScrollTrigger.normalizeScroll(false);
ScrollTrigger.config({ignoreMobileResize: true});

//* ----------------------- Создание ScrollTrigger -----------------------------
export function refreshScrollTrigger() {
	return ScrollTrigger.refresh();
}

//* -------------------- Уничтожение ScrollSmoother ----------------------------
// export function destroySmoother(initSmoother) {
// 	if (initSmoother) {
// 		/* Уничтожаем экземпляр ScrollSmoother при размонтировании */
// 		initSmoother.kill();
// 	}
// }

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
			trigger: '.offer-container__body',
			start: 'top bottom-=50',
			endTrigger: '.offer-container__body', // end: 'bottom bottom+=70',
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
			trigger: '.offer-container__body',
			start: 'top bottom-=300',
			endTrigger: '.offer-container__body', // end: 'bottom bottom+=70',
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
// export function smoother() {
//   return ScrollSmoother.create({
//     wrapper: '#wrapper',
//     content: '#content',
//     smooth: 2,
//     effects: true,
//     normalizeScroll: true,
//   });
// }

// export function createSmoother(
//   initialPositions,
//   columnSelector = '.services-slide__column',
// ) {
//   let initSmoother;
//
//   if (!isMobile()) {
//   /* Инициализируем smoother через вспомогательную функцию */
//   initSmoother = smoother();
//
//   /* Сбрасываем прокрутку при смене маршрута */
//   initSmoother.scrollTop(0, true);
//
//   /* Применяем эффекты для колонок */
//   initSmoother.effects(columnSelector, {
//     speed: (i) => {
//       if (initialPositions) {
//         const position = initialPositions[i];
//         return position ? position.speed : 1.5;
//       }
//       return 1.5;
//     },
//   });
//   }
//
//   return initSmoother;
// }

