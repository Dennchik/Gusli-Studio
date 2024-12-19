import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionPromotion = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_09.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_09.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Продвижение артистов
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h2>Таргетированная реклама</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										<span>Таргетированная реклама</span>&nbsp;
										для&nbsp;артистов&nbsp;— платный инструмент
										онлайн-маркетинга,
										который даёт возможность показывать рекламные объявления
										интересующей аудитории. При&nbsp;этом можно задавать
										ограничения по&nbsp;различным параметрам: от&nbsp;пола,
										возраста&nbsp;геолокации до&nbsp;интересов потенциального
										слушателя.
									</p>
									<h3>Некоторые цели таргетированной рекламы для
										артистов:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Рост знаний об
											артисте
											и его релизах. Можно расширять аудиторию, показывая
											объявления тем, кто ещё не знаком с творчеством, а также
											информировать уже имеющуюся аудиторию о выходе нового
											релиза;
										</li>
										<li><i className="icon-check _icon"></i>Увеличение
											количества
											прослушиваний. Если артист опубликовал новый релиз, он
											может
											рассказать об этом в соцсетях с помощью рекламы —
											сегодня
											артистам доступны рекламные форматы, которые позволяют
											слушать треки прямо внутри объявления;
										</li>
										<li><i className="icon-check _icon"></i>Продажа мерча или
											билетов на концерты. Если артист едет в тур, он может
											рассказать жителям нужных городов и областей о
											предстоящих
											концертах.
										</li>
									</ul>

									<h3>Таргетированная реклама включает в&nbsp;себя:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>Поиск и анализ
											целевой
											аудитории;
										</li>
										<li><i className="icon-check _icon"></i>Подбор
											визуальных
											материалов для рекламы;
										</li>
										<li><i className="icon-check _icon"></i>Предоставление
											персонального менеджера;
										</li>
										<li><i className="icon-check _icon"></i>Ежедневные
											отчёты
											и
											аналитика;
										</li>
										<li><i className="icon-check _icon"></i>Ведение
											таргетированной рекламы.
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h2> Питчинг релиза: путь к успеху в&nbsp;мире музыки</h2>
									<p><i className="icon-hand-pointer _icon"></i>
										<span>Питчинг релиза</span>&nbsp;— это&nbsp;не&nbsp;просто
										представление музыкального материала, это&nbsp;возможность
										получить поддержку и&nbsp;продвижение, которые могут
										вывести карьеру на&nbsp;новый уровень. В этой статье
										мы&nbsp;подробно расскажем о&nbsp;том, как грамотно
										провести питчинг, чтобы&nbsp;ваши песни были замечены
										и&nbsp;оценены профессионалами.
									</p>
									<h3>Этапы грамотного питчинга.</h3>
									<p>Успешный питчинг включает в&nbsp;себя несколько важных
										этапов:</p>
									<p><i className="icon-hand-pointer _icon"></i>
										<span>Подготовка</span>:
										Отгружать трек на&nbsp;музыкальные площадки следует
										за&nbsp;3–4&nbsp;недели до&nbsp;релиза. Например,
										если&nbsp;релиз запланирован на&nbsp;21&nbsp;сентября,
										то&nbsp;уже к&nbsp;24 августа&nbsp;у вас должны быть
										готовы мастер-трек, финальная версия обложки, текст песни
										и&nbsp;её&nbsp;название;</p>
									<p><i className="icon-hand-pointer _icon"></i>
										<span>Заполнение маркетинговой анкеты</span>:
										Эта анкета содержит подробную информацию об&nbsp;артисте,
										описание трека, его&nbsp;жанр или&nbsp;направление,
										достижения артиста, настроение песни и&nbsp;другие важные
										данные. Также необходимо указать подробный медиаплан,
										в&nbsp;котором будут прописаны все&nbsp;рекламные
										инструменты, которые вы&nbsp;планируете использовать
										для&nbsp;продвижения трека, и&nbsp;размер рекламных
										бюджетов на&nbsp;каждый из&nbsp;них.</p>
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
									<h2>Цены:</h2>
									<p>Таргетированная реклама&nbsp;-
										<span> 13&nbsp;000&nbsp;рублей</span>.
									</p>
									<p>Питчинг релиза и&nbsp;размещение плейлиста&nbsp;-
										<span> 4900&nbsp;рублей</span>
									</p>
									<h2>План работы:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											Первым шагом отправьте нам свой трек или&nbsp;альбом для
											оценки. Наши специалисты внимательно изучат ваш материал
											и&nbsp;оценят, насколько данный жанр подходит
											для&nbsp;рекламы;
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Для успешной рекламы потребуются разнообразные
												фото&nbsp;- и&nbsp;видеоматериалы, связанные
												с&nbsp;релизом. Также необходимо заранее определить
												рекламный бюджет и&nbsp;сроки выхода вашего
												релиза;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Получив все необходимые данные, мы&nbsp;разработаем
												стратегию продвижения, которая будет подробно
												описывать, как&nbsp;будет распределяться рекламный
												бюджет;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Затем мы отправим вам подробный план стратегии
												продвижения вашего релиза. После того как&nbsp;вы его
												утвердите, мы&nbsp;можем приступить к&nbsp;работе.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionPromotion.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};