import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

//* ------------------------ Component's MainSlide -----------------------------

export const Showreel = ({ post_banner }) => {
	const videoRef = useRef(null);
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
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	const showreelVideo = isMobile ? post_banner.showreel_mobile : post_banner.showreel_desctop;
	const showreelPoster = post_banner.img;
	return (
		<div className="main-video">
			<div className="main-video__body">
				<div className="main-video__box _img">
					<video
						ref={videoRef}
						id="player-id"
						className="video-js"
						preload="auto"
						muted="muted"
						tabIndex="-1"
						playsInline
						autoPlay
						loop
						poster={showreelPoster}
						src={showreelVideo}>
					</video>
				</div>
				<div className="main-video__content _container">
					<div className="main-video__row">
						<h1 className="main-video__title el-slidetitle h1_01901" dangerouslySetInnerHTML={{__html: post_banner.title}}/>
						<div className="main-video__text t_01901">
							{post_banner.desc}
						</div>
					</div>
					<div className="main-video__button">
						<a target={'_blank'} rel="noopener noreferrer"
							href={post_banner.btn_url}
							className="button-buy btn-grad"
							type={'button'}>
							<span>Забронировать </span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Showreel.propTypes = {
	post_banner: PropTypes.array.isRequired,
};
