import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

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
				return videoTop > -300;
			};
			// Автоматическое воспроизведение видео при монтировании, если оно в зоне
			// видимости
			const playVideo = async () => {
				if (isVideoInView() && video.paused) {
					try {
						await video.play();
						console.log('Видео воспроизводится');
					} catch (err) {
						// Игнорируем AbortError, другие ошибки логируем
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					}
				} else {
					console.log('Видео вне видимости, воспроизведение пропущено');
				}
			};
			// Выполняем проверку при монтировании
			void playVideo();

			// Обработчик клика для управления воспроизведением
			const handleVideoClick = () => {
				if (video.paused) {
					video.play().catch(err => {
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					});
				} else {
					video.pause();
				}
			};

			// Обработчик события прокрутки
			const handleScroll = () => {
				if (!video) return;

				// Получаем расстояние от верхней границы видео до верхней части экрана
				const videoTop = video.getBoundingClientRect().top;

				// Условие для паузы или воспроизведения
				if (videoTop < -300 && !video.paused) {
					video.pause();
				} else if (videoTop > -300 && video.paused) {
					video.play().catch(err => {
						if (err.name !== 'AbortError') {
							console.warn('Не удалось воспроизвести видео:', err);
						}
					});
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
						className="video-js"
						// role="application"
						preload="auto"
						muted="muted"
						tabIndex="-1"
						loop
						autoPlay
						playsInline
						poster={getPath('img/audio/showreel-1.png')} >
						<source src='https://этопольза.рф/local/templates/cult/video/index-hero-video.mp4' type="video/mp4" />
					</video>
				</div>
				<div className="main-video__content _container">
					<h1 className="main-slide__title el-slidetitle h1_01901">
						<span>Профессиональная </span>
						<span>студия звукозаписи </span>
						<span>ГУСЛИ Media-Group</span> в&nbsp;Обнинске
					</h1>
					<div className="main-slide__text t_01901">
						Мы — современная студия звукозаписи, в&nbsp;которой работают
						лучшие специалисты в&nbsp;области записи и&nbsp;продюсирования
						музыки, предоставляем самый лучший сервис и&nbsp;удобства
						для&nbsp;современных артистов, как&nbsp;подписанных, так
						и &nbsp;независимых.
					</div>
					<div className="offer-container__button _open-button">
						<button className="order-button btn-grad"
							type={'button'}>
							<span>оставить заявку</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

MainSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
