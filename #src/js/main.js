
// import dynamicAdaptive from './libraries/move-elements.js';
// dynamicAdaptive();

//* ----------------------------------------------------------------------------
// import Waves from './animations/waves.jsx';
// const isMobile = /Mobi|Android/i.test(navigator.userAgent);
// //* Ищем элемент с атрибутом data-page
// const pageElement = document.body.querySelector('[data-page]');
//
// //* Получаем значение data-page, если элемент найден
// const currentPage = pageElement ? pageElement.getAttribute(
// 	'data-page') : null;
// if (currentPage !== 'index' && !isMobile) {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		const waves = new
// 		Waves('#holder', {waves: 3, width: 300,});
// 		waves.animate();
// 	});
// }
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------

(function(m,e,t,r,i,k,a){
	m[i]=m[i]||function(){
		(m[i].a=m[i].a||[]).push(arguments);
	};
	m[i].l=1*new Date();
	for (var j = 0; j < document.scripts.length; j++) {
		if (document.scripts[j].src === r) {
			return;
		}
	}
	k=e.createElement(t),
		a=e.getElementsByTagName(t)[0],
		k.async=1,
		k.src=r,
		a.parentNode.insertBefore(k,a);
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

ym(97063218, 'init', {
	clickmap:true,
	trackLinks:true,
	accurateTrackBounce:true,
	webvisor:true
});
function addNoScript() {
	var noScriptDiv = document.createElement('div');
	var img = document.createElement('img');
	img.src = 'https://mc.yandex.ru/watch/97063218';
	img.style.position = 'absolute';
	img.style.left = '-9999px';
	img.alt = '';
	noScriptDiv.appendChild(img);

	var noScriptElement = document.createElement('noscript');
	noScriptElement.appendChild(noScriptDiv);

	document.body.appendChild(noScriptElement);
}

// NoScript elementini qo'shish
addNoScript();