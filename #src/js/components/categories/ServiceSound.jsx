import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../animations/animations.jsx';
import { animationSvgLine } from '../../animations/anime-js.jsx';

//* ----------------------------------------------------------------------------
export const ServiceSound = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	const boxImagesRef = useRef([]);
	useEffect(() => {
		const handleMouseOver = (event) => {
			const target = event.currentTarget;
			// Запускаем анимацию при наведении
			animationSvgLine(target, false);
		};
		const handleMouseLeave = (event) => {
			const target = event.currentTarget;
			setTimeout(() => {
				/*  Запускаем анимацию в обратном направлении с задержкой при уходе
				 мыши */
				animationSvgLine(target, true);
			}, 500);
		};
		const boxImages = Array.from(
			document.querySelectorAll('.services-slide__image'),
		);
		// Сохраняем ссылку на элементы в useRef
		boxImagesRef.current = boxImages;
		boxImages.forEach((boxImage) => {
			boxImage.addEventListener('mouseover', handleMouseOver);
			boxImage.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			boxImages.forEach((boxImage) => {
				boxImage.removeEventListener('mouseover', handleMouseOver);
				boxImage.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, []);

	useEffect(() => {
		animateTitles(
			'.services__title',
			'.services__title',
			'.services__title',
			'=150',
			'=150',
		);
		refreshScrollTrigger();
	}, [location.pathname, isHomepage]);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="categories-sound">
			<div className="services categories-sound__body">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
								<img className="parallax__image-services bg"
									src={getPath('img/main/body/serv_bg.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/main/body/serv_bg.png')}
										alt="image" />
								)
							}
						</picture>
					</div>
				</div>
				<div className="services__body _container">
					<div className="services__title">Звук</div>
					<div className="services__content">
						<div className="services-slide">
							<div className="services-slide__body">
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<svg viewBox="0 0 700 430">
													<g
														fill="none"
														fillRule="evenodd"
														stroke="currentColor"
														strokeWidth="8"
														className="lines"
													>
														<style type="text/css">
															{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
														</style>
														<path className="el"
															d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
													</g>
												</svg>
											</div>
											<a href={getPath('@@webRoot/services/sound/musician.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_6.webp')}
															alt="image-6" />
														)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_6.png')}
															alt="image-6" />
														)}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Композитор</p>
												<p>от 10 000₽</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/sound-recording.html')}>
												<picture>
													{isWebpSupported() ? (
														<img src={getPath(
															'@@webRoot/img/main/body/img_7.webp')}
															alt="image-7" />)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_7.png')}
															alt="image-7"
														/>
														)}
												</picture>
												<picture>
													{isWebpSupported() ? (
														<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-img"
														/>
													) : (
														<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-img"
														/>
													)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Звукозапись</p>
												<p>от 1 500₽ в час</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<svg viewBox="0 0 700 430">
													<g
														fill="none"
														fillRule="evenodd"
														stroke="currentColor"
														strokeWidth="8"
														className="lines"
													>
														<style type="text/css">
															{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
														</style>
														<path className="el"
															d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
													</g>
												</svg>
											</div>
											<a href={getPath('@@webRoot/services/sound/arrangement.html')}>
												<picture>
													{isWebpSupported() ? (
														<img src={getPath(
															'@@webRoot/img/main/body/img_8.webp')}
															alt="image-8"
														/>
													) : (
														<img src={getPath(
															'@@webRoot/img/main/body/img_8.png')}
															alt="image-8"
														/>
													)}
												</picture>
												<picture>
													{isWebpSupported() ? (
														<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-img"
														/>
													) : (
														<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-img"
														/>
													)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Аранжировка</p>
												<p>от 15 000₽</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<svg viewBox="0 0 700 430">
													<g
														fill="none"
														fillRule="evenodd"
														stroke="currentColor"
														strokeWidth="8"
														className="lines"
													>
														<style type="text/css">
															{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
														</style>
														<path className="el"
															d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
													</g>
												</svg>
											</div>
											<a href={getPath('@@webRoot/services/sound/bits.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_9.webp')}
															alt="image-9" />)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_9.png')}
															alt="image-9"
														/>
														)}
												</picture>
												<picture>
													{isWebpSupported()
														? (
															<img className="services-slide__bg-img"
																src={getPath(
																	'@@webRoot/img/main/body/bg_img.webp')}
																alt="bg-img" />
														)
														: (
															<img className="services-slide__bg-img"
																src={getPath(
																	'@@webRoot/img/main/body/bg_img.png')}
																alt="bg-img" />
														)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Биты</p>
												<p>от 5 000₽</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/session-musicians.html')}>
												<picture>
													{isWebpSupported() ? (
														<img src={getPath(
															'@@webRoot/img/main/body/img_10.webp')}
															alt="image-10" />
													)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_10.png')}
															alt="image-10" />
														)
													}
												</picture>
												<picture>
													{isWebpSupported() ? (
														<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-img" />
													)
														: (
															<img className="services-slide__bg-img"
																src={getPath(
																	'@@webRoot/img/main/body/bg_img.png')
																}
																alt="bg-img" />
														)
													}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Сессионные музыканты</p>
												<p>от 2 000₽ в час</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/sound-design.html')}>
												<picture>
													{isWebpSupported() ? (
														<img src={getPath(
															'@@webRoot/img/main/body/img_11.webp')}
															alt="image-11" />
													)
														: (
															<img src={getPath(
																'@@webRoot/img/main/body/img_11.png')}
																alt="image-1" />
														)
													}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />
														)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)
													}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Звуковой дизайн</p>
												<p>от 2 500₽ минута</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/audio-podcasts.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_12.webp')}
															alt="image-12" />
														)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_12.png')}
															alt="image-12" />
														)
													}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />
														)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)
													}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Аудио-подкасты <span>(возможен выезд)</span></p>
												<p>от 2 000₽ в час</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/voice-acting.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_13.webp')}
															alt="image-13"
														/>)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_13.png')}
															alt="image-13"
														/>
														)}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Дикторская озвучка</p>
												<p>от 500₽ минута</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/dubbing.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_1.webp')}
															alt="image-1" />)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_1.png')}
															alt="image-1" />
														)}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Дубляж</p>
												<p>по договоренности</p>
											</div>
										</div>
									</div>
								</div>
								<div className="services-slide__column line">
									<div className="services-slide__content">
										<div className="services-slide__image el">
											<div className="services-slide__svg">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g
															fill="none"
															fillRule="evenodd"
															stroke="currentColor"
															strokeWidth="8"
															className="lines"
														>
															<style type="text/css">
																{`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el"
																d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5,31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
											</div>
											<a href={getPath('@@webRoot/services/sound/mastering.html')}>
												<picture>
													{isWebpSupported()
														? (<img src={getPath(
															'@@webRoot/img/main/body/img_15.webp')}
															alt="image-15" />)
														: (<img src={getPath(
															'@@webRoot/img/main/body/img_15.png')}
															alt="image-15" />
														)}
												</picture>
												<picture>
													{isWebpSupported()
														? (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.webp')}
															alt="bg-image" />)
														: (<img className="services-slide__bg-img"
															src={getPath(
																'@@webRoot/img/main/body/bg_img.png')}
															alt="bg-image" />
														)}
												</picture>
											</a>
											<div className="services-slide__text">
												<p>Сведение и мастеринг</p>
												<p>от 3 000₽ композиция</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="services-slide__pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
ServiceSound.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};