import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { buildSwiper } from '../../layouts/build-swiper.js';
import { Slide } from '../../layouts/showreel-slide.js';
//* ------------------------ Component's MainSlide -----------------------------

export const ShowreelSlide = ({baseUrl}) => {
	const videoRef = useRef(null);
	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	useEffect(() => {
		buildSwiper();
		Slide();
	}, []);

	useEffect(() => {
		// if (videoRef.current) {
		// const video = videoRef.current;
		// Проверка видимости видео
		// const isVideoInView = () => {
		// 	const videoTop = video.getBoundingClientRect().top;
		// 	return videoTop > -300;
		// };
		// Автоматическое воспроизведение видео при монтировании, если оно в зоне
		// видимости
		// const playVideo = async () => {
		// 	if (isVideoInView() && video.paused) {
		// 		try {
		// 			await video.play();
		// 			console.log('Видео воспроизводится');
		// 		} catch (err) {
		// 			// Игнорируем AbortError, другие ошибки логируем
		// 			if (err.name !== 'AbortError') {
		// 				console.warn('Не удалось воспроизвести видео:', err);
		// 			}
		// 		}
		// 	} else {
		// 		console.log('Видео вне видимости, воспроизведение пропущено');
		// 	}
		// };
		// Выполняем проверку при монтировании
		// void playVideo();

		// Обработчик клика для управления воспроизведением
		// const handleVideoClick = () => {
		// 	if (video.paused) {
		// 		video.play().catch(err => {
		// 			if (err.name !== 'AbortError') {
		// 				console.warn('Не удалось воспроизвести видео:', err);
		// 			}
		// 		});
		// 	} else {
		// 		video.pause();
		// 	}
		// };

		// Обработчик события прокрутки
		// const handleScroll = () => {
		// 	if (!video) return;
		//
		// 	// Получаем расстояние от верхней границы видео до верхней части экрана
		// 	const videoTop = video.getBoundingClientRect().top;
		//
		// 	// Условие для паузы или воспроизведения
		// 	if (videoTop < -300 && !video.paused) {
		// 		video.pause();
		// 	} else if (videoTop > -300 && video.paused) {
		// 		video.play().catch(err => {
		// 			if (err.name !== 'AbortError') {
		// 				console.warn('Не удалось воспроизвести видео:', err);
		// 			}
		// 		});
		// 	}
		// };
		//
		// // Добавляем обработчики событий
		// video.addEventListener('click', handleVideoClick);
		// window.addEventListener('scroll', handleScroll);
		//
		// // Очистка обработчиков событий при размонтировании
		// return () => {
		// 	video.removeEventListener('click', handleVideoClick);
		// 	window.removeEventListener('scroll', handleScroll);
		// };
		// }
	}, []);


	return (
		<div className="showreel _container">
			<div className="showreel__body">
				<div className="showreel__title">Наше портфолио</div>
				<div className="showreel-slide">
					<div className="showreel-slide__wrapper">
						<div className="showreel-slide__body _swiper">
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<video
										ref={videoRef}
										id="player-id"
										playsInline
										controls
										className="video-js"
										muted
										poster={getPath('img/audio/showreel-1.png')}
										src={getPath('img/audio/showreel-1.mp4')}
									>
									</video>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<video
										ref={videoRef}
										id="player-id"
										playsInline
										controls
										className="video-js"
										muted
										poster={getPath('img/audio/showreel-2.png')}
										src={getPath('img/audio/showreel-2.mp4')}>
									</video>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<video
										ref={videoRef}
										id="player-id"
										playsInline
										controls
										className="video-js"
										muted
										poster={getPath('img/audio/showreel-1.png')}
										src={getPath('img/audio/showreel-1.mp4')}
									>
									</video>
								</div>
							</div>
						</div>
						<div className="showreel-slide__prev">
							<i className="icon-angle-left _icon"></i>
						</div>
						<div className="showreel-slide__next">
							<i className="icon-angle-right _icon"></i>
						</div>
					</div>
					<div className="showreel-slide__pagination"></div>
				</div>
			</div>
		</div>
	);
};

ShowreelSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
