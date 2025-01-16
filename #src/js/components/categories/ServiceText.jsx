import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { observerMutation } from '../../assets/observerMutation.js';

import {
	animateTitles,
	refreshScrollTrigger
} from '../../animations/animations.jsx';
import {
	animationSvgLine,
	animationSvgText
} from '../../animations/anime-js.jsx';
import { buildSwiper } from '../../layouts/build-swiper.js';
import { Slide } from '../../layouts/services-video-slide.js';
import { Offer } from '../chunks/Offer.jsx';

//* ----------------------------------------------------------------------------
export const ServiceText = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	const boxImagesRef = useRef([]);
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useEffect(() => {
		buildSwiper();
		Slide();

		const cleanup = observerMutation();
		return () => {
			// Очищаем наблюдатели при размонтировании
			if (cleanup) cleanup();
		};
	}, []);


	useEffect(() => {
		if (!isMobile) {
			const handleMouseOver = (event) => {
				const target = event.currentTarget;
				// Запускаем анимацию при наведении
				animationSvgLine(target, false);
				animationSvgText(target, false);
			};
			const handleMouseLeave = (event) => {
				const target = event.currentTarget;
				setTimeout(() => {
					/*  Запускаем анимацию в обратном направлении с задержкой при уходе
					 мыши */
					animationSvgLine(target, true);
					animationSvgText(target, true);
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
		}
	}, []);

	useEffect(() => {
		if (!isMobile) {
			const smoother = ScrollSmoother.get();
			if (smoother) {
				if (!isMobile || innerWidth > 1024) {
					smoother.effects('.services-slide__column', {
						speed: (i) => {
							return window.matchMedia('(min-width:730px)').matches
								? i % 2 === 1
									? 1.15
									: 1
								: i % 2 === 0
									? 0.9
									: 1.15;
						},
					});

					animateTitles(
						'.services__title',
						'.services__title',
						'.services__title',
						'=150',
						'=150',
					);
					refreshScrollTrigger();
				}
			}
		}

	}, [location.pathname, isHomepage]);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	return (
		<div className="categories-service">
			<div className="material-parallax parallax">
				<div className="parallax__image">
					<img className="parallax__image-services bg"
						src={getPath('/img/parallax/bg_svg.svg')}
						alt="image" />
				</div>
			</div>
			<div className="categories__body">
				<div className="services _container">
					<div className="services__body top-box min-height-vh">
						<h1 className="services__title">Текст</h1>
						<div className="services__content">
							<div className="services-slide">
								<div className="services-slide__body slide-services _swiper">
									<div className="services-slide__column line">
										<a href={getPath('services/text/text-song.html')}
											className="services-slide__content">
											<div className="services-slide__image el">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="8" className="lines" >
															<style type="text/css"> {`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el" d="M11.6,12.2c69.8,144.5,138.5,245,178.9,277.9c29.8,24.2,60.5,32.7,60.5,32.7c5.6,1.5, 31.8,8.4,65.9,3.4c28.1-4.1,47.3-14.2,68-25c34.2-17.9,55.5-37.6,61.9-43.7c13.8-13.2,27.2-26.1,37.4-47.3c3.1-6.4,21.9-46.7,8.9-57.9c-11.3-9.7-41.2,7.2-56.1,18.7c-6.2,4.7-28.1,22.4-41.7,57.6c-16.1,41.8-19.9,107.1,19.3,150.7c6.9,7.7,22.9,23.3,47.8,31.8c36.1,12.3,68.2,1.9,85.1-3.6c6.2-2,28.7-9.7,56-30.5c42.8-32.6,66.8-74.1,79.8-103.9" />
														</g>
													</svg>
												</div>
												<div className="services-slide__picture">
													<picture>
														{isWebpSupported() ? (
															<img className="services-slide__img" src={getPath('img/cards/text/img_1.webp')} alt="image-1" />
														) : (
															<img className="services-slide__img" src={getPath('img/cards/text/img_1.png')} alt="image-1" />
														)}
													</picture>
													<picture>
														{isWebpSupported() ? (
															<img className="services-slide__bg-img" src={getPath('img/cards/bg_img.webp')} alt="bg-img" />
														) : (
															<img className="services-slide__bg-img" src={getPath('img/cards/bg_img.png')} alt="bg-img" />
														)}
													</picture>
												</div>
												<div className="services-slide__text">
													<p>Написание&nbsp;текста песни</p>
												</div>
											</div>
										</a>
									</div>
									<div className="services-slide__column line">
										<a href={getPath('services/text/text-scenarios.html')}
											className="services-slide__content">
											<div className="services-slide__image el">
												<div className="services-slide__svg">
													<svg viewBox="0 0 700 430">
														<g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1" className="lines" >
															<style type="text/css"> {`.el{fill:none;stroke:#fff;stroke-width:8;stroke-miterlimit:10;}`}
															</style>
															<path className="el" d="M685.8,108.5c-14.3,4.6-36.4,10.1-63.7,10c-34.6-0.1-61.2-9.1-81-16C496,86.8,493,75,454.9,67.2c-15.6-3.2-34.7-6.9-58.6-1.8c-10,2.1-35.5,7.9-56.8,30c-19.6,20.3-24.8,42.9-28.1,58.9c-2.2,10.5-11.1,58.7,11.6,100.5c3.7,6.8,22.1,40.7,55.1,44c4.3,0.4,29.8,2.4,51-22.4c4.5-5.2,18.1-22.5,21.8-51.1c1.1-8.3,4.7-36.3-8.8-59.2c-3.5-5.9-7.4-10.3-11.3-13.6c-2-1.7-7.2-5.9-16.5-9.7c-7-2.8-25.6-10.3-48.3-5.6c-20.8,4.3-33.7,16.6-41.1,23.7c-19.8,19.2-26.7,40.6-36.8,73.7c-8.9,28.8-7.8,37.4-20.5,76.3c-4.3,13.1-8.7,25.2-17.9,38.7c-6.4,9.3-15.3,22-31.6,30.5c-15.6,8.2-30,8.1-39.6,8.5c-36.8,1.6-63.5-17.6-70-22.4c-28.6-21.5-42.4-51.3-54.4-77.2c-19.6-42.2-25.5-77.6-32.6-118.4c-5-28.5-10.2-67.3-12.2-114"
															/>
														</g>
													</svg>
												</div>
												<div className="services-slide__picture">
													<picture>
														{isWebpSupported() ? (
															<img className="services-slide__img" src={getPath('img/cards/text/img_2.webp')} alt="image-3" />
														) : (
															<img className="services-slide__img" src={getPath('img/cards/text/img_2.png')} alt="image-3" />
														)}
													</picture>
													<picture>
														{isWebpSupported() ? (
															<img className="services-slide__bg-img" src={getPath('img/cards/bg_img.webp')} alt="bg-img" />
														) : (
															<img className="services-slide__bg-img" src={getPath('img/cards/bg_img.png')} alt="bg-img" />
														)}
													</picture>
												</div>
												<div className="services-slide__text">
													<p>Написание сценариев</p>
												</div>
											</div>
										</a>
									</div>
								</div>
								<div className="services-slide__pagination pagination"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hr-shelf _container">
				<div className="hr-shelf__content"></div>
			</div>
			{<Offer baseUrl={baseUrl} />}
		</div>
	);
};

ServiceText.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};