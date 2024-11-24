import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

export const MainSlide = ({ baseUrl }) => {
	const videoRef = useRef(null);
	const getPath = (fileName) => `${baseUrl}/${fileName}`;

	useEffect(() => {
		// Инициализация видеоплеера
		const player = videojs('player-id', {
			controls: false, // отключает элементы управления
			loop: true,
			autoplay: true,
			preload: 'auto',
			muted: true,  // Обязательно для автозапуска на iOS
			fill: true,
		});

		// Ожидание загрузки плеера и проверки mute
		setTimeout(() => {
			if (player.muted()) {
				console.log('Звук выключен');
			} else {
				console.log('Звук включен');
			}
		}, 500);  // Задержка, чтобы убедиться, что плеер инициализировался

		const videoElement = videoRef.current;

		// Обработчик кликов и тачей
		const togglePlay = () => {
			if (player.paused()) {
				player.play();
			} else {
				player.pause();
			}
		};

		// Добавляем обработчики событий для iOS
		const onUserInteraction = () => {
			// Включаем звук, чтобы пользователь мог продолжить взаимодействовать с видео
			if (player.paused()) {
				player.play();
			}
		};

		// Видео начинается только по касанию или клику
		videoElement.addEventListener('click', togglePlay);
		videoElement.addEventListener('touchstart', togglePlay);

		// Обработчик прокрутки
		const handleScroll = () => {
			if (!videoElement) return;
			let videoTop = videoElement.getBoundingClientRect().top;

			if (videoTop < -400) {
				if (!player.paused()) {
					player.pause();
				}
			}
			if (videoTop > -400) {
				if (player.paused()) {
					player.play();
				}
			}
		};

		// Добавляем обработчик события scroll
		window.addEventListener('scroll', handleScroll);

		// Очистка при размонтировании компонента
		return () => {
			if (player) {
				player.dispose();
			}
			window.removeEventListener('scroll', handleScroll);
		};

	}, [baseUrl]);

	return (
		<div className="main-video">
			<div className="main-video__body">
				<div className="main-video__box _img">
					<video
						ref={videoRef}
						id="player-id"
						className="video-js"
						preload="auto"
						muted
					>
						<source src={getPath('img/audio/showreel-1.mp4')} type="video/mp4" />
					</video>
				</div>

				<div className="main-slide__content main-video__content _container">
					<h1 className="main-slide__title el-slidetitle h1_01901">
						<span>Профессиональная </span>
						<span>студия звукозаписи </span>
						<span>ГУСЛИ Media-Group</span> в Обнинске
					</h1>
					<h2 className="main-slide__text t_01901">
						Мы — современная студия звукозаписи, в которой работают
						лучшие специалисты в области записи и продюсирования
						музыки, предоставляем самый лучший сервис и удобства
						для современных артистов, как подписанных, так и
						независимых.
					</h2>
				</div>
			</div>
		</div>
	);
};

MainSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
