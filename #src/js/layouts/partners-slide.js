import { buildSwiper } from './build-swiper.js';

buildSwiper('._swiper');
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

export function servicesSlide(
	servicesSlide = '.services-slide__body',
	pagination = '.services-slide__pagination',
	// scrollbar = '',
	// nextEl = '',
	// prevEl = '',
) {
	if (servicesSlide) {
		new Swiper(servicesSlide, {
			speed: 800,
			spaceBetween: 30,
			// loop: true,
			grabCursor: true,
			// mousewheel: true,
			// centeredSlides: true,
			// slidesPerView: 5,
			pagination: {
				el: pagination,
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				330: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				491: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 5,
				}
			}
		});
	}
}