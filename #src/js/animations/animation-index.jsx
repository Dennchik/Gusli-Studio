import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { Flip } from 'gsap/Flip';
//* ----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
ScrollTrigger.config({ignoreMobileResize: true});
// ScrollTrigger.normalizeScroll(true); 
//* ----------------------------------------------------------------------------
// Check if the device is mobile 
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
export let smoother;

//* Устанавливаем плавную прокрутку страницы
if (!isMobile) {
	smoother = ScrollSmoother.create({
		wrapper: '#wrapper',
		content: '#content',
		smooth: 1,
		effects: true,
		normalizeScroll: true,
		// ignoreMobile: true,
	});
}

//* ----------------------------------------------------------------------------
export function applyEffects(smoother) {
	smoother.effects('.content-box__column', {
		speed: (i) => {
			// Desktop three columns layout
			if (window.matchMedia('(min-width:730)').matches) {
				// Center column is faster
				return i % 3 === 1 ? 1.15 : 1;
			} else {
				// Mobile, right column is fast
				return i % 2 === 0 ? 0.9 : 1.15;
			}
		}
	});
}

//* ----------------------- Секция "Parallax Effects" --------------------------
export function applyParallaxEffects(smoother, element) {

	if (smoother) {
		smoother.effects(element, {
			speed: (i) => {
				return i % 1 === 0 ? 0.5 : 1.15;
			}
		});
	}
}

//* ----------------------------------------------------------------------------
export function animateTitles(element, trigger, endTrigger, start, end) {
	gsap.from(element, {
		y: 150,
		duration: 1,
		opacity: 0,
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}}`,
			endTrigger: endTrigger,
			end: `bottom bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});
}

//* Секция "#main-slide".
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
export function tlFooterParallel() {
	const tlFooter = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			endTrigger: '.footer',
			end: 'bottom bottom',
			scrub: 0.1,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlFooter.from('.footer .el-1', {
		x: -250,
		duration: 1,
		opacity: 0,
		ease: 'linear',
	});

	tlFooter.from('.el-2', {
		x: window.innerWidth <= 680 ? 350 : 0,
		y: window.innerWidth > 680 ? 150 : 0,
		duration: 1,
		opacity: 0,
		ease: 'linear',
	}, '-=1');

	tlFooter.from('.el-3', {
		x: window.innerWidth <= 680 ? -350 : (window.innerWidth > 680 ? 350 : 0),
		duration: 1,
		opacity: 0,
	}, '-=1');

	tlFooter.from('.el-4', {
		y: 150,
		duration: 1,
		opacity: 0,
	}, '-=0.5');

	tlFooter.from('.el-5', {
		y: 350,
		duration: 1,
		opacity: 0,
	}, '-=1');

	tlFooter.from('.contacts__items', {
		x: 450,
		duration: 1,
		opacity: 0,
	}, '-=1');
}

//* ----------------------------------------------------------------------------
export function tlServices1() {
	const tlServices1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.services__offer',
			start: 'top center+=300',
			endTrigger: '.services__offer',
			end: 'bottom center+=300',
			scrub: 1,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlServices1.from('.sr-1', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'linear',
	});
	tlServices1.from('.sr-2', {
		x: 150,
		duration: 1,
		opacity: 0,
	}, '-=1');
}

//* ----------------------------------------------------------------------------
export function tlServices2() {
	const tlServices2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.services__offer',
			start: 'top center+=50',
			endTrigger: '.services__offer',
			end: 'bottom center+=150',
			scrub: 1,
			toggleActions: 'play none none reverse',
			// markers: true,
		}
	});
	tlServices2.from('.sr-3', {
		x: -150,
		duration: 1,
		opacity: 0,
		ease: 'linear',
	});
	tlServices2.from('.sr-4', {
		x: 150,
		duration: 1,
		opacity: 0,
		ease: 'linear',
	}, '-=1');
}