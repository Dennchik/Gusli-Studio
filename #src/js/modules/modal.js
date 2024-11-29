export default function modal() {
	const galleryCards = document.querySelectorAll('.gallery__card');
	let modal = document.querySelector('.page__modal-image');

	galleryCards.forEach(galleryCard => {
		let openButton = galleryCard.querySelector('._open-button');
		openButton.addEventListener('click', (e) => {
			let openButton = e.target;

			// Находим URL изображения в карточке
			let ahref = openButton.closest('.gallery__card').querySelector('img').src;
			console.log(ahref);

			// Находим элементы модального окна
			let modalImg = modal.querySelector('.modal__image > img');
			let closeButton = modal.querySelector('._close-modal');

			// Устанавливаем URL в модальное изображение и показываем модальное окно
			modalImg.src = ahref;

			modal.classList.add('_show');
			modal.classList.remove('_hide');
			modal.style.zIndex = '13';

			setTimeout(
				() => {
					modal.classList.add('_complete'); // Убираем границу через 1.75 секунды
				}, 1000// Длительность анимации
			);

			closeButton.addEventListener('click', () => {
				console.log(closeButton);
				modal.classList.remove('_show', '_complete');
				modal.classList.add('_hide');
				setTimeout(
					function removethis() {
						// modal.classList.remove('_show');
						// modal.style.display = 'none';
						modal.style.zIndex = '1';
						// modal.style.display = null;
					}, 2000
				);
			});
		});
	});
}