import { buildSwiper } from './build-swiper.js';

buildSwiper('._swiper');
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

export function Slide(
	Slide = '.slide-services',
	pagination = '.services-slide__pagination',
	// scrollbar = '',
	// nextEl = '',
	// prevEl = '',
) {
	if (Slide) {
		new Swiper(Slide, {
			speed: 800,
			grabCursor: true,
			spaceBetween: 30,
			slidesPerView: 5,
			// autoHeight: true,
			// loop: true,
			// mousewheel: true,
			// centeredSlides: true,

			pagination: {
				el: pagination,
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class='' + className + ' ' + 'el' + '">' + (index +
				// 1) + "</span>"; },
			},
			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				491: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 4,
				},

				1024: {
					spaceBetween: 30,
					slidesPerView: 5,
				},
			}
		});
	}
}