export default function modal() {
	const galleryCards = document.querySelectorAll('.gallery__card');
	let modal = document.querySelector('.page__modal-image');

	galleryCards.forEach(galleryCard => {
		let trigger = galleryCard.querySelector('._open-button');
		trigger.addEventListener('click', (e) => {
			let target = e.target;

			// Находим URL изображения в карточке
			let ahref = target.closest('.gallery__card').querySelector('img').src;
			console.log(ahref);

			// Находим элементы модального окна
			let modalImg = modal.querySelector('.modal__image > img');
			let closeButton = modal.querySelector('._close-modal');

			// Устанавливаем URL в модальное изображение и показываем модальное окно
			modalImg.src = ahref;

			modal.classList.remove('_show');
			setTimeout(
				function removethis() {
					modal.classList.remove('flash');
					// modal.classList.add('swing');
					modal.style.zIndex = '13';
				}, 500
			);

			closeButton.addEventListener('click', () => {
				console.log(closeButton);
				modal.classList.add('flash');
				setTimeout(
					function removethis() {
						modal.classList.add('_show');
						// modal.classList.remove('_show');
						modal.style.display = 'none';
						modal.style.zIndex = '1';
						modal.style.display = null;
					}, 700
				);
			});
		});
	});
}