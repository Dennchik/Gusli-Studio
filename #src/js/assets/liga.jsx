export default (function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'guitar-line': '&#xe90c;',
			'guitar': '&#xe90d;',
			'hand-grab': '&#xf255;',
			'hand-paper': '&#xf256;',
			'hand-scissors': '&#xf257;',
			'hand-lizard': '&#xf258;',
			'hand-spock': '&#xf259;',
			'hand-pointer': '&#xf25a;',
			'hand-peace': '&#xf25b;',
			'piano': '&#xe90b;',
			'step-backward': '&#xf048;',
			'fast-backward': '&#xf049;',
			'backward': '&#xf04a;',
			'play': '&#xf04b;',
			'pause': '&#xf04c;',
			'stop': '&#xf04d;',
			'forward': '&#xf04e;',
			'fast-forward': '&#xf050;',
			'step-forward': '&#xf051;',
			'eject': '&#xf052;',
			'rouble': '&#xf159;',
			'rub': '&#xf159;',
			'angle-left': '&#xf104;',
			'angle-right': '&#xf105;',
			'angle-up': '&#xf106;',
			'angle-down': '&#xf107;',
			'hand-shake': '&#xf2b6;',
			'phone-call': '&#xe914;',
			'volume-control-phone': '&#xf2a0;',
			'music': '&#xf001;',
			'youtube-logo': '&#xf167;',
			'whatsapp': '&#xf232;',
			'vk-brand': '&#xf189;',
			'telegram-fly': '&#xe91b;',
			'volume-high': '&#xea26;',
			'home': '&#xe909;',
			'house': '&#xe909;',
			'phone-ringing': '&#xe904;',
			'cellular-phone': '&#xe907;',
			'phone-hand': '&#xe908;',
			'angles-left-solid': '&#xe94c;',
			'angles-right-solid': '&#xe94f;',
			'angles-up-solid': '&#xe94d;',
			'angles-down-solid': '&#xe94e;',
			'reviews': '&#xe900;',
			'contacts': '&#xe901;',
			'achievements': '&#xe902;',
			'services': '&#xe903;',
			'head-phones': '&#xe913;',
			'youtube': '&#xea9d;',
			'camera-film': '&#xe90a;',
			'microphone': '&#xe905;',
			'record-voice': '&#xe906;',
			'location': '&#xe924;',
			'enve-mail': '&#xe925;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());
