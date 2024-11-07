//* ------------- Import Swiper bundle with all modules installed --------------
import Swiper from 'swiper/bundle';
import { buildSwiper } from './build-swiper.js';

buildSwiper('._swiper');

//*  ------------------------- import styles bundle ----------------------------
export function mainSlide(
	mainSlide = '.main-slide__body',
	pagination = '.main-slide__pagination',
	// scrollbar = '',
	// nextEl = '',
	// prevEl = '',
) {
	if (mainSlide) {
		new Swiper(mainSlide, {
			// autoplay: {
			// 	delay: 7000,
			// 	disableOnInteraction: true,
			// },
			speed: 800,
			loop: true,
			grabCursor: true,
			// mousewheel: true,
			slidesPerView: 1,
			// spaceBetween: 130,
			// autoHeight: true,
			pagination: {
				el: pagination,
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class='' + className + ' ' + 'el' + '">' + (index +
				// 1) + "</span>"; },
			},

			// navigation: {
			// 	nextEl: nextEl,
			// 	prevEl: prevEl,
			// },

			// scrollbar: {
			// 	el: scrollbar,
			// },
			// on: {
			// 	slideChange: function () {
			// Проверяем, содержит ли активный слайд нужный класс
			// 		const activeSlide =
			// document.querySelector('.main-slide__slide-wrapper'); if
			// (activeSlide.classList.contains('swiper-slide-active')) { Запускаем
			// анимацию, если активный слайд содержит нужный класс fadeInSlide(); } }
			// }
		});
	}
}




