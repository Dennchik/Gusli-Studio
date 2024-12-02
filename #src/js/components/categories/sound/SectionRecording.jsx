import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionRecording = ({baseUrl}) => {
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
											 src={getPath('img/main/service/fotoram_bg_02.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_02.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title recording-title'>Звукозапись</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-volume-high _icon"></i>Самой
										востребованной услугой в студии является запись голоса.
										Сегодня мы подробнее расскажем о&nbsp;ней. Вы включаете
										радио и слышите идеально записанные голоса, четкие попадания
										в&nbsp;ноты и&nbsp;потрясающий вокал. Этого звучания можно
										добиться при записи в&nbsp;профессиональной студии.
									</li>
									<li><i className="icon-volume-high _icon"></i>Когда вы
										приходите в студию, вы платите деньги за&nbsp;определенные
										вещи. Например, за дорогостоящее оборудование и&nbsp;опыт
										профессионалов. Вам гораздо проще и&nbsp;удобнее прийти
										в&nbsp;студию, записать свой голос и&nbsp;быстро получить
										готовый результат, чем&nbsp;собирать &quot;железо&quot;,
										изолировать свою студию, учиться ей пользоваться,
										а&nbsp;потом тратить годы на&nbsp;изучение элементарных
										навыков звукорежиссуры. И&nbsp;даже это не&nbsp;дает
										гарантий, что&nbsp;ваш голос будет звучать действительно
										хорошо. Поэтому поверьте, деньги, которые вы платите
										за&nbsp;запись и&nbsp;обработку вашего голоса в&nbsp;студии,
										- это ничто по&nbsp;сравнению с&nbsp;тем, если бы вы
										занимались этим самостоятельно.
									</li>
								</ul>
							</div>
							<div className="service-description__row">
								<ul>
									<li><i className="icon-volume-high _icon"></i>Атмосфера
										в&nbsp;студии всегда располагает к&nbsp;творчеству.
										В&nbsp;окружении всевозможных инструментов
										и&nbsp;оборудования студии вы погружаетесь в&nbsp;особое
										состояние, которое сначала может пугать и заставлять вас
										волноваться, но со&nbsp;временем вы научитесь этим
										пользоваться и&nbsp;направлять свое эмоциональное состояние
										в нужное русло. Да, вы будете волноваться, стоя
										в&nbsp;вокальной комнате перед микрофоном, но&nbsp;скоро вы
										освоитесь и&nbsp;поймете, какая на&nbsp;самом деле
										непринужденная обстановка царит в&nbsp;студии звукозаписи.
									</li>
									<li><i className="icon-volume-high _icon"></i>Вы платите
										исключительно за&nbsp;время работы на&nbsp;студии. Сюда
										входят все виды работ. Неважно, это&nbsp;сведение, мастеринг
										песни, тюнинг вокала (т.е. правка не совсем правильного
										интонирования) или чистка шумов. Оплата рассчитывается
										исключительно по&nbsp;времени, которое было затрачено
										на&nbsp;ваш проект. Если вам нужна запись голоса
										на&nbsp;студии, обращайтесь к нам!
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionRecording.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};