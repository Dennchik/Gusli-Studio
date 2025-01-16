import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';
import { AppButton } from '../../../app/button.jsx';
//* ----------------------------------------------------------------------------
export const SectionEventsRent = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.service-description__title',
				'.service-description__title',
				'.service-description__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();
		}
	}, [location.pathname, isHomepage]);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="service-description">
			<div className="service-description__column">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
								<img className="parallax__image-services"
									src={getPath('img/parallax/events/fotoram_bg_05.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/parallax/events/fotoram_bg_05.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Аренда оборудования
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-hand-pointer _icon"></i>
										Превратите ваше мероприятие в&nbsp;незабываемое событие
										с&nbsp;помощью аренды оборудования! Мы&nbsp;предлагаем
										широкий выбор профессионального звукового, светового
										и&nbsp;видеооборудования, а&nbsp;также мебель и&nbsp;декор,
										чтобы&nbsp;сделать ваше&nbsp;мероприятие стильным
										и&nbsp;запоминающимся.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Наше оборудование отличается высоким качеством
										и&nbsp;надежностью, что&nbsp;гарантирует безупречную работу
										во&nbsp;время мероприятия. Мы&nbsp;также предоставляем
										консультации и&nbsp;помощь в&nbsp;выборе оборудования,
										чтобы&nbsp;ваше мероприятие соответствовало всем&nbsp;вашим
										ожиданиям.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Неважно, проводите&nbsp;ли вы свадьбу, корпоративное
										мероприятие, концерт или&nbsp;выставку&nbsp;-
										мы&nbsp;поможем создать атмосферу, которая запомнится вашим
										гостям надолго. Сделайте ваше мероприятие ярким
										и&nbsp;профессиональным с&nbsp;помощью аренды оборудования
										от&nbsp;нашей компании!
									</p>
								</div>
							</div>
							<p className="service-description__ps">Предлагаем услуги
								проката звукового и&nbsp;светового оборудования высшего
								качества по&nbsp;самым выгодным ценам.
							</p>
						</div>
						<div className="service-description__button _open-button">
							<AppButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionEventsRent.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};