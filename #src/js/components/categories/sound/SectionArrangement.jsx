import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionArrangement = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	useEffect(() => {

	}, []);

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
									src={getPath('img/main/service/fotoram_bg_04.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/main/service/fotoram_bg_04.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title arrangement-title'>Аранжировка</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-hand-pointer _icon"></i>В данной статье мы рассмотрим процесс создания аранжировки на заказ и&nbsp;возможность заказа битов. Создание аранжировки – это&nbsp;процесс создания музыки для&nbsp;песни с нуля. Если у&nbsp;вас есть текст песни и&nbsp;вы хотите создать собственную уникальную композицию, то это именно то, что&nbsp;вам нужно. Создание аранжировки также может быть основано на&nbsp;вашей индивидуальной мелодии или&nbsp;мелодии популярного автора (таким образом часто работают даже известные артисты).</li>
									<li><i className="icon-hand-pointer _icon"></i>Если вы хотите записать песню на&nbsp;радио в высоком качестве, мы рекомендуем не&nbsp;спешить и&nbsp;не&nbsp;экономить. Написание таких проектов начинается от&nbsp;40&nbsp;000 рублей и&nbsp;включает в&nbsp;себя индивидуальный подход, довольно долгий срок создания песни (от 2-3 недель) и&nbsp;результат, который превзойдет все ваши ожидания. Также у&nbsp;нас можно заказать создание фоновой музыки.</li>
									<li><i className="icon-hand-pointer _icon"></i>В&nbsp;студии нет предпочтений относительно стиля аранжировки. Наши специалисты готовы работать в&nbsp;любом из&nbsp;интересующих вас стилей (это могут быть песни в&nbsp;стилях поп, рок или&nbsp;рэп и другие). Выбирайте любую услугу, которая вам понравится. Мы&nbsp;всегда проконсультируем и&nbsp;поможем с&nbsp;выбором.</li>
									<li><i className="icon-hand-pointer _icon"></i>Прежде всего, если вы хотите поработать с&nbsp;командой опытных специалистов в области аранжировки, то&nbsp;вы пришли в&nbsp;нужное место. Мы&nbsp;– команда профессионалов, готовых к&nbsp;работе любой сложности. Мы&nbsp;ответим на&nbsp;любой вопрос и&nbsp;бесплатно проконсультируем. Если вас интересует создание аранжировки на&nbsp;заказ, обращайтесь к&nbsp;нам уже сегодня!
									</li>
								</ul>
							</div>

							<div className="service-description__row">
								<ul>
									<li><i className="icon-guitar-line _icon"></i>Профессионализм и&nbsp;опыт наших звукорежиссеров и&nbsp;музыкальных аранжировщиков позволяют нам создавать качественную музыкальную аранжировку для&nbsp;каждого клиента.</li>
									<li><i className="icon-guitar-line _icon"></i>Мы&nbsp;ценим iкаждого клиента и&nbsp;предлагаем индивидуальный подход к&nbsp;каждому заказу. Мы&nbsp;учитываем ваши предпочтения и&nbsp;потребности, чтобы создать аранжировку, которая идеально отражает вашу музыкальную идею.</li>
									<li><i className="icon-guitar-line _icon"></i>Наша студия ставит на&nbsp;первое место креативность и оригинальность. Мы поможем вам выделиться среди конкурентов, создав уникальный звук, который запомнится вашей аудитории.</li>
									<li><i className="icon-guitar-line _icon"></i>Мы&nbsp;гарантируем оперативное выполнение заказов, чтобы вы&nbsp;могли радовать своих слушателей новыми аранжировками в&nbsp;срок.</li>
									<li><i className="icon-guitar-line _icon"></i>Наша студия имеет свой неповторимый стиль, который поможет придать вашей музыке особую изюминку. Мы&nbsp;создаем аранжировки, которые отражают вашу индивидуальность и&nbsp;помогают вам выразить свое творческое видение.</li>
									<li><i className="icon-guitar-line _icon"></i>Доверьтесь профессионалам и&nbsp;создайте звук, который запомнится надолго!</li>
									<p>Цены на&nbsp;написание аранжировки от&nbsp;10&nbsp;000 рублей. </p>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
SectionArrangement.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};