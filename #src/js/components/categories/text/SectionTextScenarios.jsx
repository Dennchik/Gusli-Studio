import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionTextScenarios = ({baseUrl}) => {
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
											 src={getPath('img/parallax/text/fotoram_bg_02.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/text/fotoram_bg_02.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Написание сценариев
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h2>Полное написание сценария</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы можем написать сценарий на&nbsp;основе вашей
										или&nbsp;нашей
										оригинальной идеи. Согласовывая с&nbsp;вами каждый этап
										разработки, мы&nbsp;создадим уникальный сценарий, который
										будет соответствовать всем вашим требованиям.
									</p>
									<h2>Детальный анализ имеющейся работы</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы проведем детальный анализ вашей работы и&nbsp;найдем
										сильные и &nbsp;слабые стороны. Мы подскажем,
										как&nbsp;их&nbsp;исправить, и&nbsp;выдадим профессиональную
										оценку всех нюансов сценария по&nbsp;широкому ряду
										критериев.
									</p>
									<h2>Работа над персонажами</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы проведем глубокую функциональную и&nbsp;графическую
										разработку или&nbsp;доработку персонажей.
									</p>
								</div>
								<div className="service-description__row-col">
									<h2>Переработка или доработка</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы можем переработать или доработать готовый
										или&nbsp;частично
										готовый сценарий, книгу или&nbsp;идею. Мы доработаем
										ваш&nbsp;материал до&nbsp;совершенства в&nbsp;рамках
										поставленных задач, при&nbsp;этом сохранив авторство
										оригинала.
									</p>
									<h2>Производство презентации проекта</h2>
									<p>Мы создадим графическую презентацию высочайшего качества,
										с&nbsp;помощью которой вы&nbsp;сможете солидно и&nbsp;емко
										представить предстоящий проект партнерам
										и&nbsp;сотрудникам.
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
SectionTextScenarios.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};