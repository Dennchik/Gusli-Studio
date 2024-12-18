import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoDesign = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_05.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_05.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Моушн<span>-</span>дизайн в&nbsp;2D&nbsp;и&nbsp;3D
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2><i className="icon-hand-pointer _icon"></i>
											Ваш бренд хочет привлечь внимание и&nbsp;заставить людей
											задуматься?</h2>
										<p> 3D-анимация&nbsp;— это идеальное решение. Она
											создает детализированные, объемные и&nbsp;реалистичные
											изображения, позволяя зрителям рассмотреть объекты
											со&nbsp;всех сторон и&nbsp;оценить каждую деталь.
											3D-анимация&nbsp;— это&nbsp;не&nbsp;просто красочный
											способ визуализации, но&nbsp;и&nbsp;мощный инструмент
											для&nbsp;продаж и&nbsp;обучения. С&nbsp;ее&nbsp;помощью вы
											сможете создавать увлекательные и&nbsp;запоминающиеся
											видеоролики, которые точно донесут ваше сообщение
											до&nbsp;аудитории
										</p>
										<p>В то время как&nbsp;2D-анимация хорошо подходит
											для&nbsp;создания логотипов и&nbsp;других элементов
											фирменного
											стиля, 3D-анимация добавляет глубину и&nbsp;реализм вашим
											проектам. Это&nbsp;не&nbsp;просто стиль, это&nbsp;целый
											мир,
											который придает вашему бренду уникальность
											и&nbsp;целостность.
											Позвольте вашей компании выделиться среди конкурентов
											и&nbsp;завоевать сердца клиентов с&nbsp;помощью
											захватывающей
											3D-анимации»</p>
										<h2><i className="icon-hand-pointer _icon"></i>
											Основные преимущества 3D-анимации:</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												Детализированность и&nbsp;объемность изображений;
											</li>
											<li><i className="icon-check _icon"></i>
												Возможность рассмотреть объект со&nbsp;всех сторон;
											</li>
											<li><i className="icon-check _icon"></i>
												Уникальная возможность продаж и&nbsp;обучения
												через&nbsp;визуальные материалы;
											</li>
											<li><i className="icon-check _icon"></i>
												Создание увлекательных и&nbsp;запоминающихся
												видеороликов;
											</li>
											<li><i className="icon-check _icon"></i>
												Добавление глубины и&nbsp;реализма проектам;
											</li>
											<li><i className="icon-check _icon"></i>
												Помощь в&nbsp;выделении бренда среди конкурентов;
											</li>
											<li><i className="icon-check _icon"></i>
												Придание уникальности и&nbsp;целостности компании.
											</li>

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Цены:</h2>
										<h3><i className="icon-hand-pointer _icon"></i>Стоимость
											моушн-дизайна рассчитывается индивидуально, исходя
											из&nbsp;объёма и&nbsp;сложности задачи.
										</h3>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>2D-анимация&nbsp;— <span>от&nbsp;1&nbsp;000&nbsp;рублей</span>
													за&nbsp;секунду. В&nbsp;сумму входит раскадровка,
													сценарий, монтаж ролика;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>3D-анимация&nbsp;— <span>от&nbsp;2&nbsp;000&nbsp;рублей</span>
													за&nbsp;секунду. В&nbsp;сумму входит раскадровка,
													сценарий, монтаж ролика;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Дудл-видео»&nbsp;— <span>от&nbsp;1&nbsp;000&nbsp;рублей</span>
													за&nbsp;секунду. В&nbsp;стоимость входит создание
													сценария, рисунков, профессиональная озвучка
													и&nbsp;монтаж;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Видеоролик с&nbsp;анимацией&nbsp;—
													<span>от&nbsp;3&nbsp;000&nbsp;рублей</span> за&nbsp;секунду.
													В&nbsp;сумму входит съёмка ролика с&nbsp;нуля,
													отрисовка анимации, монтаж;</p>
											</li>
											<li>
												<i className="icon-check _icon"></i>
												<p>Мультипликация&nbsp;— <span>от&nbsp;500&nbsp;рублей</span>
													за&nbsp;секунду. Проработка и&nbsp;отрисовка
													мультфильма, различные техники;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Стоп-моушн&nbsp;— <span>от&nbsp;4&nbsp;000&nbsp;рублей</span>
													за&nbsp;секунду (в&nbsp;зависимости
													от&nbsp;технического
													задания).</p>
											</li>
										</ul>
										<h3><i className="icon-hand-pointer _icon"></i>
											Где применяется моушн дизайн?</h3>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Телевидение: для&nbsp;брендинга и&nbsp;создания
													заставок к&nbsp;сериалам, программам, эфирам,
													новостям;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Маркетинг, реклама: создание промо-роликов,
													презентаций, инструкций; видеорекламы; имиджевых
													или&nbsp;объясняющих роликов;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Онлайн медиа: моушн дизайн востребован
													для&nbsp;создания заставок, титров, перебивок,
													видеоконтента;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Оффлайн мероприятия, шоу. Моушн-дизайнеры оформляют
													большие экраны, делают 3d&nbsp;мэгпинг на&nbsp;фасадах
													зданий.</p>
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
SectionVideoDesign.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};