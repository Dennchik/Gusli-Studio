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
			<div className="service-description__column-parallax">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services"
											 src={getPath('img/parallax/video/fotoram_bg_15.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_15.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							моушн-дизайн в&nbsp;2D&nbsp;и&nbsp;3D
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">

								<p><i className="icon-hand-pointer _icon"></i>Ваш бренд хочет
									привлечь внимание и&nbsp;заставить людей задуматься?
									3D-анимация&nbsp;— это идеальное решение. Она создает
									детализированные, объемные и&nbsp;реалистичные изображения,
									позволяя зрителям рассмотреть объекты со&nbsp;всех сторон
									и&nbsp;оценить каждую деталь. 3D-анимация&nbsp;—
									это&nbsp;не&nbsp;просто красочный способ визуализации,
									но&nbsp;и&nbsp;мощный инструмент для&nbsp;продаж
									и&nbsp;обучения. С&nbsp;ее&nbsp;помощью вы сможете создавать
									увлекательные и&nbsp;запоминающиеся видеоролики, которые
									точно донесут ваше сообщение до&nbsp;аудитории
								</p>
								<p>В то время как&nbsp;2D-анимация хорошо подходит
									для&nbsp;создания логотипов и&nbsp;других элементов фирменного
									стиля, 3D-анимация добавляет глубину и&nbsp;реализм вашим
									проектам. Это&nbsp;не&nbsp;просто стиль, это&nbsp;целый мир,
									который придает вашему бренду уникальность и&nbsp;целостность.
									Позвольте вашей компании выделиться среди конкурентов
									и&nbsp;завоевать сердца клиентов с&nbsp;помощью захватывающей
									3D-анимации»</p>
								<h3><i className="icon-hand-pointer _icon"></i>
									Основные преимущества 3D-анимации:</h3>
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
										Создание увлекательных и&nbsp;запоминающихся видеороликов;
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
			<div className="service-description__column">
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Цены:</h2>
								<p><i className="icon-hand-pointer _icon"></i>Стоимость
									моушн-дизайна рассчитывается индивидуально, исходя
									из&nbsp;объёма и&nbsp;сложности задачи.
								</p>
								<ul>
									<li><i className="icon-check _icon"></i>2D-анимация&nbsp;—
										от&nbsp;1&nbsp;000&nbsp;рублей за&nbsp;секунду. В&nbsp;сумму
										входит раскадровка, сценарий, монтаж ролика.
									</li>
									<li><i className="icon-check _icon"></i>3D-анимация&nbsp;—
										от&nbsp;2&nbsp;000&nbsp;рублей за&nbsp;секунду. В&nbsp;сумму
										входит раскадровка, сценарий, монтаж ролика.
									</li>
									<li><i className="icon-check _icon"></i>«Дудл-видео»&nbsp;—
										от&nbsp;1&nbsp;000 рублей за&nbsp;секунду. В&nbsp;стоимость
										входит создание сценария, рисунков, профессиональная озвучка
										и монтаж.
									</li>
									<li><i className="icon-check _icon"></i>Видеоролик
										с&nbsp;анимацией7nbsp;— от&nbsp;3 000&nbsp;рублей
										за&nbsp;секунду. В&nbsp;сумму входит съёмка ролика
										с&nbsp;нуля, отрисовка анимации, монтаж.
									</li>
									<li><i className="icon-check _icon"></i>Мультипликация&nbsp;—
										от&nbsp1&nbsp;500&nbsp;рублей за&nbsp;секунду. Проработка
										и&nbsp;отрисовка мультфильма, различные техники.
									</li>
									<li><i className="icon-check _icon"></i>Стоп-моушн —
										от&nbsp;4&nbsp;000&nbsp;рублей за&nbsp;секунду (в
										зависимости от&nbsp;технического задания).
									</li>
								</ul>

								<h3><i className="icon-hand-pointer _icon"></i>Где применяется
									моушн
									дизайн</h3>
								<p>Телевидение: для&nbsp;брендинга и&nbsp;создания заставок к
									сериалам,
									программам, эфирам, новостям.</p>
								<p>Маркетинг, реклама: создание промо-роликов, презентаций,
									инструкций; видеорекламы; имиджевых или&nbsp;объясняющих
									роликов.</p>
								<p>Онлайн медиа: моушн дизайн востребован для&nbsp;создания
									заставок,
									титров, перебивок, видеоконтента.</p>
								<p>Оффлайн мероприятия, шоу. Моушн-дизайнеры оформляют большие
									экраны, делают 3d мэгпинг на&nbsp;фасадах зданий.</p>
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