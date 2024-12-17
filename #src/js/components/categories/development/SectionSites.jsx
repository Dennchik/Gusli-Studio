import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSites = ({baseUrl}) => {
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
											 src={getPath(
												 'img/parallax/development/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/development/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Разработка сайтов
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Создать сайт любого типа и&nbsp;сложности</h2>
								<p><i className="icon-hand-pointer _icon"></i>
									Создание сайта&nbsp;- это&nbsp;возможность произвести хорошее
									впечатление на пользователей. Мы&nbsp;принимаем решение,
									нравится нам сайт или&nbsp;нет, всего за&nbsp;10&nbsp;секунд.
									Поэтому удобство и&nbsp;качество ресурса напрямую влияют
									на&nbsp;количество онлайн-продаж. Важно поддерживать внимание
									аудитории, поэтому мы&nbsp;тщательно продумываем структуру
									сайта, дизайн и&nbsp;контент. В&nbsp;результате сайт способен
									значительно увеличить поток клиентов.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Мы предоставляем полный цикл услуг по&nbsp;созданию сайтов:
									проектирование, разработка мобильного и&nbsp;адаптивного
									дизайна, интеграция с&nbsp;системами 1С и&nbsp;Битрикс,
									внедрение различных внешних систем.
								</p>
								<h3>Что входит в комплексный подход:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>
										Проект, который решит поставленные бизнес-задачи
										с&nbsp;учетом особенностей ниши и&nbsp;пользовательского
										опыта;
									</li>
									<li><i className="icon-check _icon"></i>
										Адаптивный дизайн. Мы&nbsp;создаем дизайн который нравится
										вам;
									</li>
									<li><i className="icon-check _icon"></i>
										Расширенные возможности: стабильная работа при&nbsp;большом
										количестве информации, возможность подключения
										дополнительных сервисов и&nbsp;передачи данных между разными
										системами;
									</li>
									<li><i className="icon-check _icon"></i>
										Продвижение сайта: увеличение конверсии, грамотная
										оптимизация под&nbsp;поисковые системы Яндекс и&nbsp;Google,
										генерация лидов;
									</li>
									<li><i className="icon-check _icon"></i>
										Функционал любой сложности
									</li>
									<li><i className="icon-check _icon"></i>
										Все наши сайты адаптивные, со&nbsp;встроенным алгоритмом,
										распознающим устройство и&nbsp;подстраивающим под&nbsp;него
										необходимый дизайн в&nbsp;точно рассчитанной конфигурации.
									</li>
								</ul>
								<h3>Типы сайтов:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Интернет-магазин;</li>
									<li><i className="icon-check _icon"></i>Корпоративный сайт;
									</li>
									<li><i className="icon-check _icon"></i>Каталог;</li>
									<li><i className="icon-check _icon"></i>Сайт-визитка.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionSites.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};