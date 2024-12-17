export function anchorsSmoothScrolling() {
	document.addEventListener('DOMContentLoaded', function () {
		const anchorLinks = document.querySelectorAll('.anchor-link');
		anchorLinks.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);

				// Определяем отступ в зависимости от ширины экрана
				const screenWidth = window.innerWidth;
				let offset = 98; // По умолчанию 150px

				// Если ширина экрана 768px и меньше, используем отступ 50px
				if (screenWidth <= 768) {
					offset = 60;
				}

				const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
				const offsetPosition = targetPosition - offset;

				// Проверяем наличие открытого бокового меню
				const sidebarMenu = e.target.closest('.sidebar-menu');
				if (sidebarMenu && sidebarMenu.classList.contains('_open-menu')) {
					const buttonItems = document.querySelector('.burger-button');
					buttonItems.classList.remove('_open-menu');
					document.body.classList.remove('no-scroll');

					// Используем вынесенную функцию для управления меню
					// toggleSidebarMenu(sidebarMenu);
				}

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			});
		});
	});
}