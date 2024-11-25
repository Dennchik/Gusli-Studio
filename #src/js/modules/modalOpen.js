export default function modalOpen() {
	const formModal = document.querySelector('.page__form-modal');
	const submitButtons = document.querySelectorAll('.order-button');

	submitButtons.forEach(submitButton => {
		submitButton.addEventListener('click', () => {
			document.body.classList.add('no-scroll');
		});
	});
	formModal.querySelector('.order-place__close-button').addEventListener(
		'click', () => {
			document.body.classList.remove('no-scroll');
		});
};




