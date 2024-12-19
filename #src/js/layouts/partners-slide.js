import { buildSwiper } from './build-swiper.js';

buildSwiper('._swiper');
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

export function partnersSlide(
	partnersSlide = '.partners-slide__body',
	pagination = '.partners-slide__pagination',
	// scrollbar = '',
	// nextEl = '',
	// prevEl = '',
) {
	if (partnersSlide) {
		new Swiper(partnersSlide, {
			speed: 800,
			spaceBetween: 30,
			// autoHeight: true,
			// loop: true,
			grabCursor: true,
			// mousewheel: true,
			// centeredSlides: true,
			slidesPerView: 3,
			pagination: {
				el: pagination,
				clickable: true,
				// renderBullet: function (index, className) {
				// 	return '<span class='' + className + ' ' + 'el' + '">' + (index +
				// 1) + "</span>"; },
			},
			breakpoints: {
				260: {
					slidesPerView: 1,
				},
				491: {
					slidesPerView: 2,
				},

				1440: {
					slidesPerView: 3,
				}
			}
		});
	}
}