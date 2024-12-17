import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionEventsLeader = ({baseUrl}) => {
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
									<img className="parallax__image-services"
											 src={getPath('img/parallax/events/fotoram_bg_03.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/events/fotoram_bg_03.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Ведущие
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<p><i className="icon-hand-pointer _icon"></i>
									Если вы ищете профессионального ведущего для&nbsp;своего
									мероприятия, мы&nbsp;предлагаем вам услуги опытных
									и&nbsp;талантливых специалистов, которые помогут сделать ваше
									событие незабываемым и&nbsp;успешным.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Наши ведущие обладают богатым опытом работы на &nbsp;различных
									мероприятиях: корпоративах, свадьбах, юбилеях, конференциях
									и&nbsp;презентациях. Они&nbsp;смогут создать атмосферу,
									соответствующую вашим ожиданиям, и&nbsp;сделать ваше
									мероприятие уникальным.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Доверьтесь нам и&nbsp;позвольте профессионалам сделать
									каждое ваше мероприятие особенным и&nbsp;уникальным. Мы
									гарантируем, что&nbsp;с&nbsp;нашей помощью каждый момент
									праздника станет незабываемым и&nbsp;оставит яркие
									воспоминания для&nbsp;вас и&nbsp;ваших гостей.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Наши ведущие&nbsp;- это&nbsp;профессионалы своего дела,
									которые&nbsp;обладают навыками ораторского искусства, отличным
									чувством юмора и&nbsp;умением работать с&nbsp;публикой.
									Они&nbsp;смогут поддержать интерес участников, создать
									приятную атмосферу и&nbsp;добавить ярких моментов в&nbsp;ваше
									мероприятие.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Не упустите возможность сделать ваше&nbsp;событие
									незабываемым! Свяжитесь с&nbsp;нами прямо сейчас,
									чтобы&nbsp;узнать больше о&nbsp;наших услугах и&nbsp;выбрать
									ведущего, который идеально подойдет для&nbsp;вашего
									мероприятия.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionEventsLeader.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};