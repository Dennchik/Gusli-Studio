import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionMusician = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';

	useEffect(() => {
		animateTitles(
			'.service-description__title',
			'.service-description__title',
			'.service-description__title',
			'=150',
			'=150',
		);
		refreshScrollTrigger();
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
									src={getPath('img/main/service/fotoram_bg_01.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/main/service/fotoram_bg_01.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title musician-title'>Композитор</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-piano  _icon"></i>В&nbsp;студии звукозаписи вы&nbsp;можете приобрести готовую песню, заказать создание музыки у&nbsp;профессиональных композиторов и&nbsp;аранжировщиков. Наши музыканты работают в&nbsp;различных жанрах: от&nbsp;популярной эстрады до&nbsp;авангарда. Они могут написать слова и&nbsp;создать музыкальную композицию в&nbsp;любом стиле, от&nbsp;классического до&nbsp;народного и&nbsp;авторского.</li>
									<li><i className="icon-piano _icon"></i>Если вам нужна мелодия для&nbsp;фильма или&nbsp;рекламы на&nbsp;телевидении, наши специалисты создадут еев&nbsp;соответствии с&nbsp;требованиями заказчика. Мы также можем написать слова и&nbsp;создать музыкальную композицию в&nbsp;радиоформате.</li>
									<li><i className="icon-piano _icon"></i>Наши авторы работают в&nbsp;разных направлениях: от&nbsp;классического до&nbsp;народного и&nbsp;авторского. Мы&nbsp;можем создать музыку для&nbsp;любого проекта, будь то&nbsp;фильм, реклама или&nbsp;корпоративное мероприятие.</li>
								</ul>
							</div>
							{/* <p>Мы предоставляем услуги по музыкальному редактированию с использованием современных инструментов и технологий.</p>
						<p>Обратившись к нашему специалисту, вы сможете получить максимальный уровень удовлетворенности и качества вашего произведения.</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionMusician.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};