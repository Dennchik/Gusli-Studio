import loaded from './assets/preloader.js';
loaded('.preloader');

// import dynamicAdaptive from './libraries/move-elements.js';
// dynamicAdaptive();

//* ----------------------------------------------------------------------------
// import Waves from './animations/waves.jsx';
// const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// if (!isMobile) {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		const waves = new Waves('#holder', {
// 			waves: 3,
// 			width: 300,
// 		});
// 		waves.animate();
// 	});
// }
//* ----------------------------------------------------------------------------
const isYaBrowser = /YaBrowser/i.test(navigator.userAgent);  // Проверка на Яндекс.Браузер
const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);  // Проверка на мобильное устройство
const isYaBrowserMobile = isYaBrowser && /Mobile/i.test(navigator.userAgent);  // Проверка на мобильный Яндекс.Браузер

if (isYaBrowser || isYaBrowserMobile) {
	console.log(isYaBrowserMobile ? 'Это мобильный Яндекс.Браузер' : 'Это ПК Яндекс.Браузер');
	const button = document.querySelector('.page__aside');
	if (button) {
		button.style.display = 'none'; // Скрыть кнопку
	}
} else if (isMobile) {
	console.log('Это мобильное устройство, но не Яндекс.Браузер');
	// Дополнительные действия для мобильных устройств, не являющихся Яндекс.Браузером
} else {
	console.log('Это не Яндекс.Браузер');
}

console.log(navigator.userAgent);
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
