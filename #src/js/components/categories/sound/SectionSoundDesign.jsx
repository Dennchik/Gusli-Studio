import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSoundDesign = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_07.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_07.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Звуковой дизайн
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>
											Цены на саунд-дизайн:
										</h2>
										<p><i className="icon-volume-high _icon"></i>
											Одна минута звукового
											дизайна&nbsp;– <span>от&nbsp;4&nbsp;500&nbsp;руб.</span>
										</p>
										<p>
											<i className="icon-volume-high _icon"></i>Саунд-дизайн&nbsp;—
											это создание звуковых эффектов для&nbsp;кино, рекламы, игр
											и&nbsp;других проектов. Одна из&nbsp;его ключевых
											особенностей
											заключается в&nbsp;том, что&nbsp;он приукрашивает
											происходящее
											на&nbsp;видео. Звуки, которые записывает камера, обычно
											не&nbsp;такие яркие и&nbsp;эпичные, как&nbsp;того требуют
											законы
											драматургии. Поэтому саунд-дизайнер озвучивает необходимые
											моменты так, чтобы зритель был полностью погружен
											в&nbsp;происходящее.</p>
									</div>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Над чем конкретно работает саунд-дизайнер?</h2>
										<p>Есть понятие &quot;звуковые слои&quot;, которое описывает
											разные категории звуков.</p>
										<ul>
											<li><i className="icon-hand-pointer _icon"></i>
												Атмосферы&nbsp;- это&nbsp;фоновые шумы, например, звуки
												природы, города, ветер и&nbsp;воздух.
											</li>
											<li><i className="icon-hand-pointer _icon"></i>
												Синхронные шумы&nbsp;- звуки одежды, рук, предметов
												обихода и&nbsp;шагов. Обычно их&nbsp;записывают
												в&nbsp;студии, а&nbsp;затем монтируют и&nbsp;сводят
												с&nbsp;другими элементами фонограммы.
											</li>
											<li><i className="icon-hand-pointer _icon"></i>
												Речь может быть внутрикадровой (реплики персонажей),
												закадровой (речь диктора) или&nbsp;интершум,
												или&nbsp;&quot;гур-гур&quot;&nbsp;- множество разговоров
												в&nbsp;одном помещении, которые сливаются в&nbsp;один
												поток.
											</li>
											<li><i className="icon-hand-pointer _icon"></i>
												Эффекты&nbsp;- это&nbsp;все звуки окружения, которые
												не&nbsp;являются синхронными шумами.
												Sfx&nbsp;придумывает саунд-дизайнер. Это&nbsp;могут быть
												звуки космических кораблей или&nbsp;фантастических
												существ. Hfx берутся из&nbsp;реального мира, например,
												звуки выстрелов, автомобилей или&nbsp;дверей.
											</li>
											<li><i className="icon-hand-pointer _icon"></i>
												Музыка может быть внутрикадровой, которая играет
												в&nbsp;самой сцене фильма или&nbsp;спектакля
												из&nbsp;винилового проигрывателя, радиоприемника
												или&nbsp;другого источника, и&nbsp;закадровой, которую
												слышат только зрители и&nbsp;которая существует
												вне&nbsp;действия героев. Закадровую музыку может
												написать композитор фильма или&nbsp;ее можно подобрать
												из&nbsp;уже существующих песен.
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
				<div className="service-description__body">
					<div className="service-description__content _container">
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Как звук взаимодействует с&nbsp;картинкой?</h2>
										<p>Есть несколько базовых правил, которые стоит
											учитывать:</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Звук должен подчеркивать происходящее на&nbsp;экране
											и&nbsp;эмоционально соответствовать действию. Например,
											во&nbsp;время сражений играет эпичная или&nbsp;напряженная
											музыка, а&nbsp;во&nbsp;время юмористических сценок&nbsp;—
											что-то&nbsp;легкое и&nbsp;игривое. Саунд-дизайнер следит
											за&nbsp;тем, чтобы&nbsp;звуковое сопровождение было
											единым. Конечно, из&nbsp;этого правила бывают исключения,
											и&nbsp;единую стилистику можно нарушать, если&nbsp;это
											осмысленный ход создателя, как&nbsp;в&nbsp;фильме Забавные
											игры&quot;.</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Семейная пара с&nbsp;маленьким сыном едет в&nbsp;свой
											богатый дом на&nbsp;озере, где&nbsp;их всех берут
											в&nbsp;заложники. Во&nbsp;вступительной сцене создается
											ощущение идиллии, люди мило болтают, играет классическая
											музыка. Внезапно включается страшный и&nbsp;очень
											агрессивный метал, диссонансное звучание которого
											моментально выбивает зрителя из&nbsp;зоны комфорта
											и&nbsp;дает понять, что&nbsp;дальше будет
											что-то&nbsp;жуткое.</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Важно не&nbsp;только само звучание звуков,
											но&nbsp;и&nbsp;правильная настройка их&nbsp;громкости
											относительно друг друга. Звуки должны существовать
											в&nbsp;иерархии. Представьте сцену в&nbsp;вертолете, где
											шум от&nbsp;техники заглушает голоса людей, поэтому тем
											приходится говорить громче обычного. Если&nbsp;записывать
											звук в&nbsp;настоящем вертолете, то&nbsp;актерам
											автоматически придется повышать голос, а&nbsp;вот
											при&nbsp;озвучке соотношение громкостей зависит только
											от&nbsp;саунд-дизайнера. Его задача в&nbsp;этом случае
											не&nbsp;подобрать настройки так, чтобы&nbsp;транспорт
											оказался абсолютно бесшумным, а&nbsp;герои спокойно
											беседовали.</p>
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
SectionSoundDesign.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};