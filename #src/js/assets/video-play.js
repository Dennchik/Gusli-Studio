export default function () {
	if (videoRef.current) {
		const video = videoRef.current;

		// Автоматическое воспроизведение видео при монтировании
		const playVideo = async () => {
			try {
				await video.play();
				console.log('Видео воспроизводится');
			} catch (err) {
				console.error('Не удалось воспроизвести видео:', err);
			}
		};
		playVideo();

		// Обработчик клика для управления воспроизведением
		const handleVideoClick = () => {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		};

		// Обработчик события прокрутки
		const handleScroll = () => {
			const videoElement = videoRef.current;

			// Получаем расстояние от верхней границы видео до верхней части экрана
			const videoTop = videoElement.getBoundingClientRect().top;

			// Условие для паузы или воспроизведения
			if (videoTop < -400) {
				if (!video.paused) {
					video.pause();
				}
			} else if (videoTop > -400) {
				if (video.paused) {
					video.play();
				}
			}
		};

		// Добавляем обработчики событий
		video.addEventListener('click', handleVideoClick);
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков событий при размонтировании
		return () => {
			video.removeEventListener('click', handleVideoClick);
			window.removeEventListener('scroll', handleScroll);
		};
	}
}