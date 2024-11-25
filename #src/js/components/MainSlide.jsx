import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';

//* ------------------------ Component's MainSlide -----------------------------

export const MainSlide = ({ baseUrl }) => {
	const videoRef = useRef(null);
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	useEffect(() => {
		if (videoRef.current) {
			const video = videoRef.current;
			// Проверка видимости видео
			const isVideoInView = () => {
				const videoTop = video.getBoundingClientRect().top;
				return videoTop > -400;
			};
			// Автоматическое воспроизведение видео при монтировании, если оно в зоне видимости
			const playVideo = async () => {
				if (isVideoInView()) {
					try {
						await video.play();
						console.log('Видео воспроизводится');
					} catch (err) {
						console.warn('Не удалось воспроизвести видео:', err);
					}
				} else {
					console.log('Видео вне видимости, воспроизведение пропущено');
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
	}, []);



	return (
		<div className="main-video">
			<div className="main-video__body">
				<div className="main-video__box _img">
					<video
						ref={videoRef}
						id="player-id"
						playsInline
						className="video-js"
						preload="auto"
						loop
						muted
					>
						<source src={getPath('img/audio/showreel-1.mp4')} type="video/mp4" />
					</video>

				</div>

				<div className="main-video__content _container">
					<h1 className="main-slide__title el-slidetitle h1_01901">
						<span>Профессиональная </span>
						<span>студия звукозаписи </span>
						<span>ГУСЛИ Media-Group</span> в&nbsp;Обнинске
					</h1>
					<div className="main-slide__text t_01901">
						Мы — современная студия звукозаписи, в которой работают
						лучшие специалисты в области записи и продюсирования
						музыки, предоставляем самый лучший сервис и удобства
						для современных артистов, как подписанных, так и
						независимых.
					</div>
				</div>
			</div>
		</div>
	);
};

MainSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
