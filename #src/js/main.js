import loaded from './assets/preloader.js';
loaded('.preloader');

// import dynamicAdaptive from './libraries/move-elements.js';
// dynamicAdaptive();

//* ----------------------------------------------------------------------------
import Waves from './animations/waves.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

// if (!isMobile && !isIndexPage) {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		const waves = new Waves('#holder', {
// 			waves: 3,
// 			width: 300,
// 		});
// 		waves.animate();
// 	});
// }
// const currentPage = document.body.querySelector.getAttribute('data-page');
// if (currentPage !== 'index' && !isMobile) {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		const waves = new Waves('#holder', {
// 			waves: 3,
// 			width: 300,
// 		});
// 		waves.animate();
// 	});
// }
// const pageElement = document.body.querySelector('[data-page]'); // Ищем элемент с атрибутом data-page
// const currentPage = pageElement ? pageElement.getAttribute('data-page') : null; // Получаем значение data-page, если элемент найден

// if (currentPage !== 'index' && !isMobile) {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		const waves = new Waves('#holder', {
// 			waves: 3,
// 			width: 300,
// 		});
// 		waves.animate();
// 	});
// }
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
