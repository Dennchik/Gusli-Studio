import videojs from 'video.js';

// Функция для инициализации плеера
export default function VideoPlayer(videoElement) {
	if (!videoElement) return null;

	// Инициализация плеера
	const player = videojs(videoElement, {
		controls: false,
		loop: true,
		autoplay: true,
		preload: 'auto',
		muted: true,
	}, function onPlayerReady() {
		console.log('Your player is ready!');
		// Добавление события клика для управления воспроизведением
		videoElement.addEventListener('click', () => {
			console.log(videoElement);


			if (this.paused()) {
				this.play();
			} else {
				this.pause();
			}
		});
	});

	// Возврат функции для удаления плеера
	return () => {
		if (player) {
			player.dispose();
		}
	};
}
