import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionBits = ({ baseUrl }) => {
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
									src={getPath('img/main/service/fotoram_bg_05.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/main/service/fotoram_bg_05.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title bits-title'>
							Биты
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<p>Попробуйте свои силы в&nbsp;создании музыки с&nbsp;помощью нашей коллекции битов. Независимо от&nbsp;вашего стиля, у&nbsp;нас есть идеальное звучание для&nbsp;ваших проектов. Мы предлагаем профессионально созданные биты, которые помогут вам создать уникальные композиции. Не&nbsp; нужно тратить время на&nbsp;поиск звучаний - покупайте у&nbsp;нас и&nbsp;воплотите свои творческие идеи прямо сейчас!</p>
								<p><span>Уникальный бит,</span> созданный по&nbsp;вашим пожеланиям и&nbsp;примерам. Наши специалисты будут работать с&nbsp;вами на протяжении всего процесса, чтобы гарантировать, что&nbsp;результат будет полностью соответствовать вашим ожиданиям. Кроме того, есть возможность создания аранжировки на&nbsp;основе вашей акапеллы, а&nbsp;также предоставить запись голоса для&nbsp;создания авторского бита под&nbsp;него.</p>
							</div>

							<div className="service-description__row">
								<h2>Бит на&nbsp;аказ включает в&nbsp;себя:</h2>
								<ul>
									<li><i className="icon-hand-pointer _icon"></i>Бит специально сделанный для&nbsp;вас, по&nbsp;вашим пожеланиям. (Wav+trackout);</li>
									<li><i className="icon-hand-pointer _icon"></i>Передача полных прав;</li>
									<li><i className="icon-hand-pointer _icon"></i>Разрешается заливать на&nbsp;любые доступные площадки.</li>
								</ul>
							</div>
							<div className="service-description__row">
								<h2>Цены:</h2>
								<ul>
									<li><i className="icon-hand-pointer _icon"></i>Авторский бит - от&nbsp;8000 руб.</li>
									<li><i className="icon-hand-pointer _icon"></i>Покупка бита из каталога - от&nbsp;3000 руб.</li>
								</ul>
								<ul>
									<li><i className="icon-volume-high _icon"></i>Возможность создать бит по вашему заданию.</li>
									<li><i className="icon-volume-high _icon"></i>Разнообразие стилей: В нашей коллекции представлены биты различных музыкальных жанров и стилей, позволяя вам найти идеальное звучание для вашего проекта.</li>
									<li><i className="icon-volume-high _icon"></i>Лицензированные треки: Покупая биты у нас, вы получаете право использовать их в своих проектах без ограничений, обеспечивая вам юридическую защиту.</li>
									<li><i className="icon-volume-high _icon"></i>Поддержка клиентов: Наша команда готова помочь вам с выбором битов, ответить на ваши вопросы и обеспечить вас необходимой поддержкой в процессе создания музыки.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
SectionBits.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};