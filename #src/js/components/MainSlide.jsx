import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { fadeInSlide } from '../animations/anime-js.jsx';
import videojs from 'video.js';
//* ------------------------ Component's MainSlide -----------------------------
import { buildSwiper } from '../layouts/build-swiper.js';
import { mainSlide } from '../layouts/main-slide.js';
// import { AudioPlayer } from './AudioPlayer.jsx';
//* ----------------------------------------------------------------------------
// import Showreel from '../сontext/Showreel.jsx';

export const MainSlide = ({ baseUrl }) => {
	useEffect(() => {
		buildSwiper();
		mainSlide();
		// Showreel();
	}, []);
	useEffect(() => {
		const slideWrappers = document.querySelectorAll(
			'.main-slide__slide-wrapper',
		);
		if (!slideWrappers.length) return; // Проверка, что слайд-контейнеры
		// существуют

		// Проверяем активен ли первый слайд при загрузке страницы
		const firstSlideWrapper = slideWrappers[0];
		const isActive = firstSlideWrapper.classList.contains(
			'swiper-slide-active',
		);

		if (isActive) {
			// Если первый слайд активен, запускаем анимацию
			fadeInSlide();
		}

		// Начинаем отслеживать изменения в слайд-контейнерах
		slideWrappers.forEach((slideWrapper) => {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (
						mutation.type === 'attributes' &&
						mutation.attributeName === 'class'
					) {
						const isActive = slideWrapper.classList.contains(
							'swiper-slide-active',
						);
						if (isActive) {
							// Если слайд-контейнер содержит класс 'swiper-slide-active',
							// запускаем анимацию
							fadeInSlide();
						}
					}
				});
			});

			observer.observe(slideWrapper, { attributes: true });
			// Отключение наблюдателя при размонтировании компонента
			return () => {
				observer.disconnect();
			};
		});
	}, []);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	// useEffect(() => {
	// 	const video = videoRef.current;

	// 	if (video) {
	// 		const handleCanPlay = () => {
	// 			video.play().catch((error) => {
	// 				console.error('Ошибка воспроизведения:', error);
	// 			});
	// 		};

	// 		video.muted = true; // Устанавливаем mute программно
	// 		video.addEventListener('canplay', handleCanPlay);

	// 		return () => {
	// 			video.removeEventListener('canplay', handleCanPlay);
	// 		};
	// 	}
	// }, []);  
	// const videoRef = useRef(null);
	// const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		// Инициализация видеоплеера
		var player = videojs('my-player', {
			controls: true,
			autoplay: false,
			preload: 'auto',
		}, function onPlayerReady() {
			console.log('Your player is ready!');

			// Запуск видео при готовности к воспроизведению
			this.play();

			// Обработка события завершения воспроизведения
			this.on('ended', function () {
				console.log('Awww...over so soon?!');
			});
		});

		// Очистка видеоплеера при размонтировании компонента
		return () => {
			if (player) {
				player.dispose();
			}
		};
	}, []);




	return (
		<div className="main-slide">
			<div className="main-slide__body _swiper">
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<video
							id="my-player"
							className="video-js"
							controls
							preload="auto"
							data-setup='{}'>
							<source src="/img/audio/showreel-1.mp4" type="video/mp4"></source>
							<p className="vjs-no-js">
								To view this video please enable JavaScript, and consider upgrading to a
								web browser that
							</p>
						</video>
					</div>
					<div className="main-slide__content _container">
						<h1 className="main-slide__title el-slidetitle h1_01901">
							<span>Профессиональная </span>
							<span>студия&nbsp;звукозаписи </span>
							<span>ГУСЛИ</span> в&nbsp;Обнинске
						</h1>
						<div className="main-slide__text t_01901">
							Мы - современная студия звукозаписи, в&nbsp;которой работают
							лучшие специалисты в&nbsp;области записи и&nbsp;продюсирования
							музыки, предоставляем самый лучший сервис и&nbsp;удобства
							для&nbsp;современных артистов, как&nbsp;подписанных, так
							и&nbsp;независимых.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? (<img src={getPath('@@webRoot/img/main/slides/slide_4.webp')}
									alt="slide-4" />)
								: (<img src={getPath('@@webRoot/img/main/slides/slide_4.jpg')}
									alt="slide-4" />)
							}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>атмосфера звука </span>музыкального пространства
						</div>
						<div className="main-slide__text t_01901">
							Мы создаем звуковые шедевры, где&nbsp;каждая нота оживает
							и&nbsp;звучит волшебно. Ваше музыкальное произведение будет
							звучать так&nbsp;же эмоционально и&nbsp;мощно,
							как&nbsp;в&nbsp;самом сердце концертного зала. Доверьте нам
							ваше&nbsp;творчество и&nbsp;ощутите магию звука в&nbsp;каждой
							ноте.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? (<img src={getPath('@@webRoot/img/main/slides/slide_2.webp')}
									alt="slide-2" />)
								: (<img src={getPath('@@webRoot/img/main/slides/slide_2.jpg')}
									alt="slide-2" />)
							}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>Индивидуальный подход </span>к Нашим Клиентам
						</div>
						<div className="main-slide__text t_01901">
							В нашей студии мы всегда стараемся делать все возможное, чтобы
							процесс записи был вдохновляющим и творческим. Мы индивидуально
							подбираем подход к каждому клиенту, с которым работаем.
						</div>
					</div>
				</div>
				<div className="main-slide__slide-wrapper">
					<div className="main-slide__slide-image _img">
						<picture>
							{isWebpSupported()
								? (<img src={getPath('@@webRoot/img/main/slides/slide_3.webp')}
									alt="slide-3" />)
								: (<img src={getPath('@@webRoot/img/main/slides/slide_3.jpg')}
									alt="slide-3" />)
							}
						</picture>
					</div>
					<div className="main-slide__content _container">
						<div className="main-slide__title el-slidetitle">
							<span>Все виды</span> микширования звука
						</div>
						<div className="main-slide__text t_01901">
							Если вы ищете качественное сведение звука, то в нашей студии есть
							все, что вам нужно! Помимо первоклассных решений для микширования
							и мастеринга, мы также предлагаем полный цикл услуг по созданию
							музыки.
						</div>
					</div>
				</div>
			</div>
			<div className="main-slide__pagination"></div>
			<div className="main-slide__media">
				{/* <AudioPlayer /> */}
			</div>
		</div>
	);
};

MainSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
