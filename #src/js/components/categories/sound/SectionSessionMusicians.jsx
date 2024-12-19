import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSessionMusicians = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_06.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_06.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Сессионные музыканты
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-guitar-line _icon"></i>
										<span>Сессионный музыкант</span>,
										как&nbsp;следует из&nbsp;названия, это&nbsp;профессионал,
										который принимает участие в&nbsp;записи на&nbsp;определенный
										период времени. Он&nbsp;обладает большим опытом
										в&nbsp;звукозаписи и&nbsp;помогает сделать звук более живым
										и&nbsp;насыщенным, добавляя интересные музыкальные партии.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>Если
										у&nbsp;вас
										есть
										своя группа, услуги сессионных музыкантов могут
										пригодиться,
										чтобы привнести изюминку в&nbsp;привычное звучание.
										Например,
										вы&nbsp;понимаете, что в&nbsp;конкретный трек органично
										впишется
										саксофон, но&nbsp;не&nbsp;готовы брать постоянного
										музыканта
										на&nbsp;полную ставку ради одной композиции. В&nbsp;таком
										случае
										сессионный исполнитель может стать подходящим решением.
									</p>
									<p><i className="icon-hand-pointer _icon"></i>Кроме того,
										временный музыкант может помочь улучшить мастерство
										постоянных
										участников группы, поделиться своими находками
										и&nbsp;фишками.
										Опытный сессионный исполнитель часто становится
										дополнительной
										профессиональной поддержкой. Он&nbsp;может предложить
										свежие
										идеи для&nbsp;аранжировки, когда у&nbsp;остальных
										музыкантов
										уже &ldquo;замылился&ldquo; слух.</p>
								</div>
								<div className="service-description__row-col">
									<h2>Сколько стоят услуги сессионных музыкантов?</h2>
									<p>Цена за <span>1 час </span>работы сессионного музыканта
										начинается <span>от 3000 рублей</span>. Работы
										звукорежиссера
										и&nbsp;техническая подготовка записи инструментов
										оплачиваются
										отдельно.</p>
									<p><i className="icon-guitar-line _icon"></i>
										Мы сотрудничаем со&nbsp;многими сессионными музыкантами,
										поэтому вы&nbsp;можете выбрать практически любой инструмент
										от&nbsp;барабанов и&nbsp;скрипки до&nbsp;дудка.
									</p>
									<p><i className="icon-guitar-line _icon"></i>
										Акустическая и&nbsp;электрическая гитары, укулеле,
										балалайка, скрипка и&nbsp;другие инструменты.
									</p>
									<p><i className="icon-guitar-line _icon"></i>
										Труба, флейта, кларнет и&nbsp;другие инструменты.
									</p>
									<p><i className="icon-guitar-line _icon"></i>Барабаны,
										гонг, ханг, ксилофон и&nbsp;другие инструменты.
									</p>
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
								<div className="service-description__row-col">
									<h2>Плюсы использования сессионных музыкантов:</h2>
									<p><i className="icon-hand-pointer _icon"></i>Некоторые люди
										могут
										прийти со&nbsp;своим соседом-гитаристом, чтобы
										он&nbsp;наиграл
										им&nbsp;нужную мелодию, но&nbsp;это может повлечь за собой
										дополнительные траты на&nbsp;аренду студии, так&nbsp;как
										человек
										может растеряться во&nbsp;время записи. Профессиональный
										сессионный музыкант –
										это &quot;сыгранный&quot; специалист,
										который знает инструмент, студию и&nbsp;правильное
										расположение
										инструмента в&nbsp;данном помещении (в каждой студии свое
										акустическое оформление, поэтому новому артисту
										и&nbsp;музыканту
										понадобится время, чтобы&nbsp;освоиться в&nbsp;новом
										помещении
										и&nbsp;поймать правильный звук).
									</p>
									<p><i className="icon-hand-pointer _icon"></i>Говоря проще,
										сессионный музыкант поможет сэкономить деньги
										на&nbsp;аренде
										студии за&nbsp;счет того, что&nbsp;быстро и&nbsp;сходу
										сыграет
										нужную мелодию, так&nbsp;как в совершенстве знает нотную
										грамоту. Особенно быстро это&nbsp;получится сделать, если
										сессионный музыкант постоянно работает при&nbsp;студии,
										а&nbsp;не&nbsp;является случайным музыкантом, взятым
										напрокат
										из&nbsp;интернета, как&nbsp;электрик на&nbsp;Avito.</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Профессиональный сессионный музыкант также может
										предложить
										интересные идеи по&nbsp;реализации песни (аранжировке),
										что&nbsp;также может пойти на&nbsp;пользу треку. Зачастую
										у&nbsp;артистов &quot;замыливается&quot; слух, и&nbsp;им
										трудно
										понять, что&nbsp;же&nbsp;лучше сделать в&nbsp;песне.
										В&nbsp;случае с&nbsp;сессионным музыкантом есть
										дополнительная
										профессиональная поддержка.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionSessionMusicians.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};