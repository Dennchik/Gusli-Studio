import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSongWriting = ({baseUrl}) => {
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
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<div className="service-description__title">
							Сонграйтинг
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-piano _icon"></i>В&nbsp;студии
										звукозаписи вы&nbsp;можете приобрести готовую песню,
										заказать создание музыки у&nbsp;профессиональных
										композиторов и&nbsp;аранжировщиков. Наши музыканты работают
										в&nbsp;различных жанрах: от&nbsp;популярной эстрады
										до&nbsp;авангарда. Они могут написать слова и&nbsp;создать
										музыкальную композицию в&nbsp;любом стиле,
										от&nbsp;классического до&nbsp;народного и&nbsp;авторского.
									</li>
									<li><i className="icon-piano _icon"></i>Если вам нужна мелодия
										для&nbsp;фильма или&nbsp;рекламы на&nbsp;телевидении, наши
										специалисты создадут еев&nbsp;соответствии
										с&nbsp;требованиями заказчика. Мы также можем написать слова
										и&nbsp;создать музыкальную композицию в&nbsp;радиоформате.
									</li>
									<li><i className="icon-piano _icon"></i>Наши авторы работают
										в&nbsp;разных направлениях: от&nbsp;классического
										до&nbsp;народного и&nbsp;авторского. Мы&nbsp;можем создать
										музыку для&nbsp;любого проекта, будь то&nbsp;фильм, реклама
										или&nbsp;корпоративное мероприятие.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Цены на&nbsp;создание песни (песни на&nbsp;заказ, авторские
									проекты, корпоративные гимны) : </h2>
								<div className="service-description__items">
									<div className="service-description__list-item">
										<h3>Пакет 1 - 100 000₽</h3>
										<ul>
											<li><i className="icon-check _icon"></i>Написание текста;
											</li>
											<li><i className="icon-check _icon"></i>Написание мелодии;
											</li>
											<li><i className="icon-check _icon"></i>Авторская
												аранжировка
												(до 40
												дорожек);
											</li>
											<li><i className="icon-check _icon"></i>Звукозапись;</li>
											<li><i className="icon-check _icon"></i>Мастеринг и
												сведение;
											</li>
											<li><i className="icon-check _icon"></i>Передача авторских
												прав;
											</li>
											<li><i className="icon-check _icon"></i>До 3 правок.</li>
										</ul>
									</div>
									<div className="service-description__list-item">
										<h3>Пакет 2 - 125 000₽</h3>
										<ul>
											<li><i className="icon-check _icon"></i>Написание текста;
											</li>
											<li><i className="icon-check _icon"></i>Написание мелодии;
											</li>
											<li><i className="icon-check _icon"></i>
												Авторская аранжировка (до&nbsp;60&nbsp;дорожек);
											</li>
											<li><i className="icon-check _icon"></i>Бек вокалисты;
											</li>
											<li><i className="icon-check _icon"></i>Звукозапись;</li>
											<li><i className="icon-check _icon"></i>Сведение и
												мастеринг;
											</li>
											<li><i className="icon-check _icon"></i>Дизайн обложки;
											</li>
											<li><i className="icon-check _icon"></i>
												Дистрибуция на цифровые площадки;
											</li>
											<li><i className="icon-check _icon"></i>
												Передача авторских прав;
											</li>
											<li><i className="icon-check _icon"></i>До 5 правок.</li>
										</ul>
									</div>
									<div className="service-description__list-item">
										<h3>Пакет 3 - от 200 000₽</h3>
										<ul>
											<li><i className="icon-check _icon"></i>Написание текста;
											</li>
											<li><i className="icon-check _icon"></i>Написание мелодии;
											</li>
											<li><i className="icon-check _icon"></i>
												Авторская аранжировка (до&nbsp;100&nbsp;дорожек) живые
												инструменты;
											</li>
											<li><i className="icon-check _icon"></i>Сессионные
												музыканты;
											</li>
											<li><i className="icon-check _icon"></i>Бек вокалисты;
											</li>
											<li><i className="icon-check _icon"></i>Звукозапись;</li>
											<li><i className="icon-check _icon"></i>
												Сведение и мастеринг;
											</li>
											<li><i className="icon-check _icon"></i>
												Дизайн обложки;
											</li>
											<li><i className="icon-check _icon"></i>
												Дистрибуция на цифровые площадки;
											</li>
											<li><i className="icon-check _icon"></i>
												Съемка видео Reels для&nbsp;презентация релиза;
											</li>
											<li><i className="icon-check _icon"></i>
												Передача авторских прав;
											</li>
											<li><i className="icon-check _icon"></i>
												Правки без ограничений.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionSongWriting.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};