import anime from 'animejs';

//* ----------------------------------------------------------------------------
export function timeLineHeaderItem() {
	let timeline = anime.timeline({
		duration: 750,
	});
	timeline.add({
		targets: '.header__item',
		opacity: [0, 1],
		translateY: [-100, 0],
		delay: anime.stagger(100, {start: 100}),
		easing: 'easeInOutSine',
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'all 0.5s ease-out';
			});
		}
	}).add({
		targets: '.header__item',
		delay: anime.stagger(100, {start: 500}),
		easing: 'easeInOutSine',
	}, '-=250').add({
		targets: '.el-logo',
		opacity: [0, 1],
		translateX: [-200, 0],
		// rotate: [-90, 0],
		duration: 1250,
		easing: 'easeInOutSine',
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'opacity 0.5s ease-out';
			});
		}
	}, 50).add({
		targets: '.el-community',
		opacity: [0, 1],
		translateX: [200, 0],

		translateY: [9, 9],
		// rotate: [-90, 0],
		duration: 1250,
		easing: 'easeInOutSine',
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'opacity 0.5s ease-out';
			});
		}
	}, 50);

}

//* ----------------------------------------------------------------------------
export function fadeInSlide() {
	let fadeInSlide = anime.timeline({
		duration: 750,
	});
	fadeInSlide.add({
		targets: '.swiper-slide-active .main-slide__title',
		opacity: [0, 1],
		translateY: [80, 0],
		delay: anime.stagger(100, {start: 500}),
		easing: 'easeInOutSine',
		duration: 1000,
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'opacity 0.3s ease-out';
			});
		}
	}, 50).add({
		targets: '.swiper-slide-active .main-slide__text',
		opacity: [0, 1],
		translateY: [100, 0],
		delay: anime.stagger(100, {start: 500}),
		duration: 1000,
		easing: 'easeInOutSine',
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'opacity 0.3s ease-out';
			});
		}
	}, 130);
}

//* --------------------------- Анимация линий ---------------------------------
export function animationSvgLine(target, reverse) {
	const path = target.querySelector('.services-slide__svg .lines path');
	// Создаем переменную path
	anime({
		targets: path,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		opacity: [0, 1],
		delay: function (el, i) {
			return i * 250;
		},
		// Устанавливаем направление анимации в зависимости от параметра reverse
		direction: reverse ? 'reverse' : 'normal',
		begin: () => {
			// Добавляем класс при начале анимации
			target.classList.add('animating');
		},
		complete: () => {
			if (reverse) {
				// Удаляем класс после завершения анимации в обратном направлении
				target.classList.remove('animating');
				path.setAttribute('stroke-dashoffset', anime.setDashoffset);
			}
		}
	});
}

//* --------------------------- Анимация текста --------------------------------
export function animationSvgText(target, reverse) {
	// Создаем переменную path
	const textPath = target.querySelectorAll(
		'.services-slide__image .lines-text path');

	anime({
		targets: textPath,
		strokeDashoffset: [0, anime.setDashoffset],
		easing: 'easeInOutSine',
		duration: 300,
		opacity: 1,
		delay: function (el, i) {
			return i * 200;
		},

		// Устанавливаем направление анимации в зависимости от параметра reverse
		direction: reverse ? 'reverse' : 'normal',
		begin: () => {
			// Добавляем класс при начале анимации
			target.classList.add('animating');
		},
		complete: () => {
			if (reverse) {
				// Удаляем класс после завершения анимации в обратном направлении
				target.classList.remove('animating');
				textPath.forEach(path => {
					path.setAttribute('stroke-dashoffset', anime.setDashoffset);
				});
			}
		}
	});
}

//* ----------------------------------------------------------------------------
/*
 export function removeElement() {
 const animatedElements = document.querySelectorAll(
 '.equalizer-content__square');
 animatedElements.forEach(element => {
 // Удаляем анимацию для каждого элемента
 anime.remove(element);
 });
 }*/
