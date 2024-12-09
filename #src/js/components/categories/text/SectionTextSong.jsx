import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionTextSong = ({baseUrl}) => {
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
											 src={getPath('img/parallax/text/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/text/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title text-song-title">
							Написание текста песни
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<p><i className="icon-hand-pointer _icon"></i>
									<span>Гострайтер</span> — это человек, который пишет тексты
									песен для&nbsp;независимых исполнителей, при&nbsp;этом
									отчуждая авторские права на&nbsp;текст.
								</p>
								<h2>Что мы предлагаем?</h2>
								<ul>
									<li><i className="icon-check _icon"></i>
										Анонимность услуг. Заказывая услуги гострайтера,
										вы&nbsp;можете быть полностью уверены, что&nbsp;заказ будет
										анонимным. Никто не &nbsp;узнает, что&nbsp;вы заказывали
										текст для&nbsp;песни;
									</li>
									<li><i className="icon-check _icon"></i>
										Мы не&nbsp;тянем время. Мы гарантируем, что&nbsp;ваш заказ
										будет выполнен за&nbsp;7&nbsp;дней. Если вам нужно срочно,
										укажите это&nbsp;при &nbsp;заказе онлайн;
									</li>
									<li><i className="icon-check _icon"></i>
										Что если мне не&nbsp;понравится текст? Наши авторы пишут
										текст с &nbsp;учетом ваших пожеланий по&nbsp;рифме, форме
										и&nbsp;тематике. После получения заказа наш гострайтер пишет
										первые 4-8&nbsp;строк для&nbsp;ознакомления. После вашего
										одобрения автор дописывает полное произведение. Такой подход
										дает вам гарантии, что&nbsp;вы получите именно то,
										что&nbsp;хотели;
									</li>
									<li><i className="icon-check _icon"></i>
										Можно ли&nbsp;заказать текст песни на&nbsp;английском языке?
										Да, наши гострайтеры пишут тексты как на&nbsp;русском,
										так&nbsp;и&nbsp;на&nbsp;английском языке. Укажите
										опцию&ldquo;английский язык&rdquo; при&nbsp;заказе онлайн;
									</li>
									<li><i className="icon-check _icon"></i>
										В каких жанрах вы пишете тексты? В&nbsp;Гусли работает
										различные
										гострайтеры. Соответственно, каждый автор занимается тем
										стилем музыки, в&nbsp;котором он&nbsp;знает
										все&nbsp;тонкости жанра,
										чтобы&nbsp;написать &ldquo;хитовый&rdquo; текст. Вы можете
										заказать текст песни в &nbsp;стиле рэп, поп, хип-хоп, рок,
										RnB, deep house и&nbsp;других.
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
SectionTextSong.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};