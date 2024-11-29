export default function modalOpen() {
	const formModal = document.querySelector('.page__form-modal');
	const modalimage = document.querySelector('.page__modal-image');

	if (formModal) {
		const closebutton = formModal.querySelector('._close-button');
		const openButton = document.querySelectorAll('.order-button');
		_openModal(openButton);
		_closeModal(closebutton);
	}

	if (modalimage) {
		const closebutton = modalimage.querySelector('._close-modal');
		const openButton = document.querySelectorAll('._open-button');
		_openModal(openButton);
		_closeModal(closebutton);
	}



	function _openModal(el) {
		el.forEach(submitButton => {
			submitButton.addEventListener('click', () => {
				document.body.classList.add('no-scroll');
			});
		});
	}
	function _closeModal(el) {
		el.addEventListener(
			'click', () => {
				document.body.classList.remove('no-scroll');
			});
	}
};




