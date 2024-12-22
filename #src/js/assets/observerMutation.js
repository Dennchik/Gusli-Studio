export function observerMutation() {
	const observerCallback = (mutationlist) => {
		for (const mutation of mutationlist) {

			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				updateStyles(mutation.target);
			}
		}
	};

	const updateStyles = (pagination) => {
		const swiperWrapper = document.querySelector('.swiper-wrapper'); if (pagination && swiperWrapper) {
			if (pagination?.classList.contains('swiper-pagination-lock')) {
				swiperWrapper.style.justifyContent = 'center';
			} else {
				swiperWrapper.style.justifyContent = 'space-between';
			}
		}
	};

	const observePagination = () => {
		const pagination = document.querySelector('.pagination ');
		if (pagination) {
			// Инициализируем стили при первом обнаружении элемента
			updateStyles(pagination);
			// Создаем и подключаем наблюдатель
			const observer = new MutationObserver(observerCallback);
			// Следим за изменениями атрибутов
			observer.observe(pagination, { attributes: true });

			// Очищаем наблюдатель при размонтировании компонента
			return () => {
				observer.disconnect();
			};
		}
		return null; // Если pagination не найден, возвращаем null
	};

	// Следим за появлением .pagination в DOM
	const observerForDOM = new MutationObserver(() => {
		const cleanup = observePagination();
		if (cleanup) {
			// Останавливаем наблюдение, если элемент найден
			observerForDOM.disconnect();
		}
	});
	const pagination = document.querySelector('.pagination');
	if (pagination) {
		// Если .pagination уже существует
		return observePagination();
	} else {
		// Если .pagination еще не существует, следим за его появлением
		observerForDOM.observe(document.body, { childList: true, subtree: true });

		// Возвращаем функцию отключения DOM-обозревателя
		return () => {
			observerForDOM.disconnect();
		};
	}
}