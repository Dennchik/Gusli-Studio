import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';
import { AppButton } from '../../../app/button.jsx';

//* ----------------------------------------------------------------------------
export const SectionEventsDj = ({ baseUrl }) => {
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
									src={getPath('img/parallax/events/fotoram_bg_03.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/parallax/events/fotoram_bg_03.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Диджеи
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><span>Диджей</span>&nbsp;- неотъемлемая часть мероприятия,
										который&nbsp;может задать атмосферу праздника и&nbsp;веселья
										правильным подбором музыкального плейлиста. Подходящие
										для&nbsp;торжества композиции добавят изысканности
										и&nbsp;зарядят публику позитивной энергией.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы предлагаем услуги диджея как&nbsp;индивидуально,
										так&nbsp;и&nbsp;в&nbsp;паре с&nbsp;профессиональным ведущим
										для&nbsp;создания максимально яркого вечера.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Наши диджеи - это&nbsp;опытные музыканты, которые&nbsp;умеют
										создавать уникальную атмосферу на&nbsp;любом празднике.
										Они&nbsp;подберут музыку, которая подойдет именно вашему
										событию и&nbsp;создаст незабываемую атмосферу.
									</p>
								</div>
							</div>
						</div>
						<div className="service-description__button _open-button">
							<AppButton />
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h3>Услуги диджея на любой праздник</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											свадьба
										</li>
										<li><i className="icon-check _icon"></i>
											юбилей
										</li>
										<li><i className="icon-check _icon"></i>
											выпускной
										</li>
										<li><i className="icon-check _icon"></i>
											корпоратив
										</li>
										<li><i className="icon-check _icon"></i>
											день рождения
										</li>
										<li><i className="icon-check _icon"></i>
											детский праздник
										</li>
										<li><i className="icon-check _icon"></i>
											тематическая вечеринка
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h3>Цены:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											Стоимость 1&nbsp;часа: <span>от&nbsp;3000&nbsp;руб</span>;
										</li>
										<li><i className="icon-check _icon"></i>
											Минимальный заказ: <span>4&nbsp;часа</span>;
										</li>
										<li><i className="icon-check _icon"></i>
											Стоимость: <span>от&nbsp;12&nbsp;000&nbsp;руб</span>.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionEventsDj.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};