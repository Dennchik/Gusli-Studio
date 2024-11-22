import loaded from './assets/preloader.js';

loaded('.preloader');

import dynamicAdaptive from './libraries/move-elements.js';

dynamicAdaptive();

//* ----------------------------------------------------------------------------
import Waves from './animations/waves.jsx';
document.addEventListener('DOMContentLoaded', () => {
	const waves = new Waves('#holder', {
		waves: 3,
		width: 300,
	});
	waves.animate();
});
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------
