import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoProduction = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_07.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_07.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Кинопроизводство
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<p><i className="icon-camera-film _icon"></i>Создание
											фильмов&nbsp;- это искусство, которое требует внимания
											к&nbsp;каждой детали и&nbsp;понимания структуры
											повествования.
											От&nbsp;завязки до&nbsp;развязки, каждый кадр должен
											служить
											цели и&nbsp;передавать задумку.
										</p>
										<p><i className="icon-camera-film _icon"></i>
											Разнообразие жанров фильмов позволяет выбрать подходящий
											формат для&nbsp;любой цели. От&nbsp;корпоративных видео,
											которые подчеркивают профессионализм компании,
											до&nbsp;художественных шедевров, способных захватить
											воображение зрителя. Документальные фильмы раскрывают
											реальность,
											а&nbsp;анимационные приглашают в&nbsp;мир фантазии.
											Научно-популярные и&nbsp;обучающие фильмы помогают
											расширить
											знания и&nbsp;обогатить опыт.</p>
										<p><i className="icon-camera-film _icon"></i>
											В современном мире также важны презентационные
											и&nbsp;имиджевые фильмы, которые формируют впечатление
											о&nbsp;бренде или&nbsp;продукте. Рекламные видеоролики
											привлекают внимание потенциальных клиентов,
											а&nbsp;видеофильмы
											для&nbsp;семейного архива хранят важные моменты нашей
											жизни.
										</p>
										<h2><i className="icon-hand-pointer _icon"></i>Основные
											преимущества разнообразия жанров и&nbsp;типов фильмов:
										</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												Возможность выбора подходящего формата для&nbsp;любой
												цели.
											</li>
											<li><i className="icon-check _icon"></i>Уникальность
												каждого
												жанра и&nbsp;его специфика.
											</li>
											<li><i className="icon-check _icon"></i>Возможность
												привлечения различных аудиторий.
											</li>
											<li><i className="icon-check _icon"></i>Создание
												эмоциональной
												связи и&nbsp;передача информации через&nbsp;разные
												жанры.
											</li>
											<li><i className="icon-check _icon"></i>Важность
												формирования
												имиджа компании или&nbsp;продукта
												через&nbsp;видеоматериалы.
											</li>
											<li><i className="icon-check _icon"></i>Способность
												привлечь
												внимание и&nbsp;удержать интерес зрителей различных
												возрастов и&nbsp;интересов.
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
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Цены:</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Рекламный ролик до&nbsp;30
													секунд&nbsp;— <span> от&nbsp;70&nbsp;000&nbsp;рублей</span> за&nbsp;1&nbsp;съёмочный
													день (10&nbsp;часов);</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Рекламный ролик до 1
													минуты&nbsp;— <span> от&nbsp;120&nbsp;000&nbsp;рублей </span> за&nbsp;2&nbsp;съёмочных
													дня;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Корпоративный фильм
													до&nbsp;3&nbsp;минут&nbsp;— <span> от&nbsp;100&nbsp;000&nbsp;рублей </span> за&nbsp;1&nbsp;съёмочный
													день
													(10&nbsp;часов);</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Корпоративный фильм до&nbsp;5
													минут&nbsp;— <span> от&nbsp;150&nbsp;000&nbsp;рублей </span> за&nbsp;2
													съёмочных дня.</p>
											</li>
										</ul>
										<h3><i className="icon-hand-pointer _icon"></i>
											Примеры стоимости съемки:</h3>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Съемка короткометражного фильма
													(1-2&nbsp;дня): <span> от&nbsp;100&nbsp;000&nbsp;рублей</span> и&nbsp;выше;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Съемка интервью
													(полдня): <span> от&nbsp;15&nbsp;000&nbsp;рублей</span>;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Съемка рекламного ролика
													(1&nbsp;день): <span> от&nbsp;50&nbsp;000&nbsp;рублей</span>;
												</p>
											</li>
										</ul>
										<h3><i className="icon-hand-pointer _icon"></i>
											Примеры стоимости монтажа:</h3>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Монтаж короткого видеоролика
													(1-2&nbsp;минуты): <span> от&nbsp;10&nbsp;000&nbsp;рублей</span>;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Монтаж длинного видео
													(более&nbsp;10&nbsp;минут): <span> от&nbsp;30&nbsp;000&nbsp;рублей</span>;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Монтаж видео с&nbsp;сложной анимацией
													и&nbsp;спецэффектами: цена обсуждается индивидуально
													и&nbsp;может быть значительно выше.</p>
											</li>
										</ul>
										<p className="service-description__ps">Важно помнить,
											что&nbsp;эти цены являются лишь ориентировочными
											и&nbsp;могут
											изменяться в&nbsp;зависимости от&nbsp;региона, специфики
											проекта и&nbsp;условий сотрудничества. Перед началом
											работы
											с&nbsp;фотографом или&nbsp;видеографом рекомендуется
											провести
											предварительные консультации и&nbsp;обсудить
											все&nbsp;детали
											проекта, чтобы&nbsp;получить точную оценку стоимости.</p>
										<p className="service-description__ps">Съемка и&nbsp;монтаж
											видео&nbsp;– это&nbsp;сложные и&nbsp;многогранные
											процессы,
											и&nbsp;стоимость этих&nbsp;услуг может значительно
											различаться. Важно выбрать квалифицированных специалистов,
											учесть все&nbsp;детали проекта и&nbsp;бюджет,
											чтобы&nbsp;получить высококачественный видеоконтент,
											который
											соответствует вашим ожиданиям.</p>
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
SectionVideoProduction.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};