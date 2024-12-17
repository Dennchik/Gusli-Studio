import { buildSwiper } from './build-swiper.js';

buildSwiper('._swiper');
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

export function Slide(
	partnersSlide = '.showreel-slide__body ',
	pagination = '.showreel-slide__pagination',
	// scrollbar = '',
	nextEl = '.showreel-slide__next',
	prevEl = '.showreel-slide__prev',
) {
	if (partnersSlide) {
		new Swiper(partnersSlide, {
			speed: 800,
			spaceBetween: 30,
			// autoHeight: true,
			// loop: true,
			// grabCursor: true,
			// mousewheel: true,

			// centeredSlides: true,
			// slidesPerView: 2,
			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},
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
				768: {
					slidesPerView: 2,
				},
			}
		});
	}
}