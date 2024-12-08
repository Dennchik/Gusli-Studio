import { gsap } from 'gsap';

import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(SplitText, Observer);

export function gotoSection(index, direction, {
	sections,
	images,
	outerWrappers,
	innerWrappers,
	splitHeadings,
	currentIndex,
	animating
}) {
	// Проверяем, что все элементы существуют
	if (
		!sections ||
		!images ||
		!outerWrappers ||
		!innerWrappers ||
		!splitHeadings ||
		sections.length === 0 ||
		images.length === 0
	) {
		console.error('Некоторые элементы не найдены.');
		return;
	}

	// Проверяем границы, чтобы не выходить за пределы массива секций
	if (index < 0 || index >= sections.length) {
		animating.current = false;
		return;
	}

	animating.current = true;
	let fromTop = direction === -1,
		dFactor = fromTop ? -1 : 1,
		tl = gsap.timeline({
			defaults: {duration: 1.25, ease: 'power1.inOut'},
			onComplete: () => (animating.current = false),
		});

	// Если текущий индекс больше или равен 0, выполняем анимацию для предыдущей
	// секции
	if (currentIndex.current >= 0) {
		gsap.set(sections[currentIndex.current], {zIndex: 0});
		tl.to(images[currentIndex.current], {yPercent: -15 * dFactor}).set(
			sections[currentIndex.current],
			{autoAlpha: 0}
		);
	}

	// Задержка выполнения анимации, чтобы элементы были доступны
	setTimeout(() => {
		gsap.set(sections[index], {autoAlpha: 1, zIndex: 1});
		tl.fromTo(
			[outerWrappers[index], innerWrappers[index]],
			{
				yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
			},
			{
				yPercent: 0,
			},
			0
		).fromTo(images[index], {yPercent: 15 * dFactor}, {yPercent: 0}, 0).fromTo(
			// Проверяем, существует ли splitHeadings[index] перед доступом к chars
			splitHeadings[index] && splitHeadings[index].chars ? splitHeadings[index].chars : [],
			{
				autoAlpha: 0,
				yPercent: 150 * dFactor,
			},
			{
				autoAlpha: 1,
				yPercent: 0,
				duration: 1,
				ease: 'power2',
				stagger: {
					each: 0.02,
					from: 'random',
				},
			},
			0.2
		);
	}, 100); // Задержка 100 миллисекунд

	currentIndex.current = index; // Обновляем текущий индекс
}