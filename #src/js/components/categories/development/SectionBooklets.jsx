import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionBooklets = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	// Инициализируем useRef для всех групп элементов


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
									src={getPath('img/parallax/development/fotoram_bg_02.webp')} alt="image" />
							) : (
								<img className="parallax__image-services bg"
									src={getPath('img/parallax/development/fotoram_bg_02.png')} alt="image" />
							)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Дизайн обложек и&nbsp;буклетов
						</h1>
						<div className="service-description__description">
							<h2>Креативный дизайн</h2>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-hand-pointer _icon"></i>Добро пожаловать в&nbsp;мир креативного дизайна, где&nbsp;каждая деталь имеет значение! Наша команда профессионалов готова воплотить в&nbsp;жизнь ваши самые смелые идеи и&nbsp;создать уникальный дизайн, который будет отражать вашу&nbsp; индивидуальность и&nbsp;стиль.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>Мы специализируемся на&nbsp;разработке логотипов, брендбуков, упаковке, веб-дизайне и&nbsp;других аспектах визуального оформления. Наш подход основан на&nbsp;глубоком понимании ваших потребностей и&nbsp;постоянном анализе рынка.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>С нашей помощью ваш&nbsp;бренд станет узнаваемым и&nbsp;запоминающимся, а&nbsp;ваш продукт будет выделяться среди конкурентов. Доверьтесь нам и&nbsp;получите качественный результат, который будет соответствовать самым высоким стандартам.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>Давайте вместе создадим уникальный дизайн, который будет вдохновлять и&nbsp;радовать вашу аудиторию!
									</p>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__row-col ">
									<h3>Дизайн соц. сетей</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Инстаграм</li>
										<li><i className="icon-check _icon"></i>Хайлайты</li>
										<li><i className="icon-check _icon"></i>Сетка</li>
										<li><i className="icon-check _icon"></i>Анимация</li>
										<li><i className="icon-check _icon"></i>Креативы</li>
										<li><i className="icon-check _icon"></i>Фотостиль</li>
										<li><i className="icon-check _icon"></i>Сторис</li>
									</ul>
									<h3>Полиграфия</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Визитка, листовка, буклет, бланк&nbsp;и&nbsp;т.д
										</li>
										<li><i className="icon-check _icon"></i>
											Сувенирная продукция, мерч
										</li>
										<li><i className="icon-check _icon"></i>Наружная реклама
										</li>
										<li><i className="icon-check _icon"></i>Каталог</li>
										<li><i className="icon-check _icon"></i>Этикетка</li>
									</ul>
								</div>
								<div className="service-description__row-col ">
									<h3>Брендинг</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Нейминг</li>
										<li><i className="icon-check _icon"></i>Платформа бренда</li>
										<li><i className="icon-check _icon"></i>Логотип и&nbsp;фирменный стиль
										</li>
										<li><i className="icon-check _icon"></i>Гайдбук</li>
										<li><i className="icon-check _icon"></i>Брендбук</li>
										<li><i className="icon-check _icon"></i>Презентация
										</li>
										<li><i className="icon-check _icon"></i>Коммерческое предложение
										</li>
									</ul>
									<h3>Веб дизайн</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Лендинг</li>
										<li><i className="icon-check _icon"></i>Интеграция на тильду
										</li>
										<li><i className="icon-check _icon"></i>Дизайн сайта</li>
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
SectionBooklets.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};