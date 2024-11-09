export default function modalOpen() {
	const formModal = document.querySelector('.page__form-modal');
	const submitButtons = document.querySelectorAll('.order-button');

	submitButtons.forEach(submitButton => {
		submitButton.addEventListener('click', () => {
			document.body.classList.add('no-scroll');
			// formModal.classList.add('is-active');
			// if (formModal.classList.contains('is-active')) {
			// }
		});
	});
	formModal.querySelector('.order-place__close-button').addEventListener(
		'click', () => {
			document.body.classList.remove('no-scroll');
			// formModal.classList.remove('is-active');
			// if (document.body.classList.contains('no-scroll')) {
			//
			// }
		});

};




