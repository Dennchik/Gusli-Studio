import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionCollectionsPage = ({ baseUrl }) => {
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
								<img className="parallax__image-services bg"
									src={getPath(
										'img/parallax/development/fotoram_bg_03.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath(
											'img/parallax/development/fotoram_bg_03.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__title">
							Создание сборников
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-hand-pointer _icon"></i>
										Наполните свой мир музыкой с&nbsp;нашими уникальными
										подборками и&nbsp;плейлистами, созданными специально
										для&nbsp;вас! Наша команда опытных музыкальных кураторов
										поможет вам создать идеальный саундтрек для&nbsp;любого
										случая&nbsp;- будь то&nbsp;романтический вечер, динамичная
										вечеринка, ресторана ил&nbsp; просто фоновая музыка
										для&nbsp;работы.</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Позвольте нам погрузить вас в&nbsp;мир удивительных звуков
										и&nbsp;мелодий, которые подчеркнут каждый момент вашей
										жизни.
										Наша страсть к&nbsp;музыке отразится в&nbsp;каждом треке,
										делая ваше прослушивание незабываемым.</p>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-musical-notes _icon"></i>
										Не упустите возможность превратить обыденные моменты
										в&nbsp;нечто&nbsp;особенное с&nbsp;нашими подборками
										и&nbsp;плейлистами. Доверьтесь профессионалам
										и&nbsp;насладитесь музыкой в&nbsp;полной мере. Сделайте
										заказ прямо сейчас и&nbsp;откройте для&nbsp;себя новые
										звуки!</p>
									<p><i className="icon-musical-notes _icon"></i>
										Наши профессиональные кураторы тщательно отбирают
										треки для&nbsp;каждого плейлиста, учитывая последние тренды
										и&nbsp;ваше вкусовое предпочтение. Мы&nbsp;предлагаем
										широкий выбор жанров и&nbsp;стилей музыки, чтобы
										удовлетворить любой вкус;</p>
								</div>
								<div className="service-description__row-col">
									<p><i className="icon-musical-notes _icon"></i>
										Индивидуальный подход: Мы &nbsp;создаем каждый плейлист
										с&nbsp;учетом ваших предпочтений, настроения и&nbsp;целей,
										чтобы&nbsp;предоставить вам&nbsp;уникальный саундтрек,
										который идеально подходит именно вам;</p>
									<p><i className="icon-musical-notes _icon"></i>
										Вы можете заказать у&nbsp;нас сборник или&nbsp;плейлист
										быстро и&nbsp;легко, просто оставив заявку на&nbsp;нашем
										сайте. Мы&nbsp;гарантируем высокое качество звука
										и&nbsp;отбор только лучших треков для&nbsp;вашего плейлиста;
									</p>
									<p><i className="icon-musical-notes _icon"></i>
										Не упустите возможность создать неповторимую атмосферу
										в&nbsp;любой ситуации с&nbsp;помощью индивидуального
										саундтрека, который подчеркнет вашу&nbsp;индивидуальность!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionCollectionsPage.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};