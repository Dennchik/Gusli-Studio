import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionAudioPodcasts = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_03.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_03.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Аудио подкасты
						</h1>
						<div className="service-description__description">
							<h2>Профессиональная запись подкаста в&nbsp;студии звукозаписи
								Гусли
							</h2>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-volume-high _icon"></i>
										<span>Подкасты </span>- это&nbsp;отличный способ выражения
										себя
										для&nbsp;тех, кто хочет поделиться своими мыслями
										и&nbsp;знаниями с&nbsp;другими людьми. Как&nbsp;правило,
										подкасты ведут профессионалы в&nbsp;своей области
										или&nbsp;харизматичные ведущие, которые могут
										заинтересовать
										своей речью.</p>
									<p>Такой формат аудио-интервью подходит для&nbsp;людей,
										у&nbsp;которых нет&nbsp;времени на&nbsp;написание длинных
										постов
										в&nbsp;социальных сетях, а&nbsp;затем
										на&nbsp;их&nbsp;редактирование.</p>
									<p>Кроме того, подкасты - это&nbsp;оригинальная и&nbsp;пока
										еще
										свободная ниша в&nbsp;онлайн-маркетинге.</p>
									<p>Если вы хотите записать свой подкаст, вы&nbsp;можете
										сделать
										это самостоятельно или&nbsp;заказать запись вместе
										с&nbsp;пост-обработкой в&nbsp;нашей студии
										звукозаписи.</p>
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
									<h2>В пост-обработку входит:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>Редакция материала (удаление фальшстартов, мата,
												фоновых шумов, склейка отобранных дублей). Делаем 1
												итерацию правок бесплатно;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Добавление музыкальной подложки, джинглов
												и&nbsp;звуковых эффектов (FX предоставляются
												клиентом);</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>В пост-обработку входит услуга по&nbsp;очистке речи
												от&nbsp;пауз хезитации
												(&quot;ммм&quot;, &quot;эээ&quot;, &quot;ааа&quot;)
												или&nbsp;пустыми
												словами &quot;это&nbsp;самое&quot;, &quot;такой&quot;,
												&quot;так&nbsp;сказать&quot;, &quot;значит&quot;,
												&quot;вот&quot;, &quot;типа&quot;, &quot;ну&quot;,
												&quot;как&nbsp;бы&quot;);</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>сведение;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Мастеринг и&nbsp;мастеринг для&nbsp;iTunes.</p>
										</li>
									</ul>
									<div className="service-description__ps">
										<p>При&nbsp;заказе пост-обработки клиент получает готовый
											подкаст
											для&nbsp;публикации на&nbsp;профильных площадках (Apple
											Подкасты, Google Подкасты и&nbsp;т.п.).
											<span> Срок сдачи готового материала: 1-4&nbsp;дня</span>.
										</p>
									</div>
								</div>
								<div className="service-description__row-col">
									<h2>Цены на&nbsp;запись подкаста:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>Запись в&nbsp;вокальной комнате&nbsp;–
												<span> 2&nbsp;000&nbsp;руб/час</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Запись подкаста в&nbsp;вокальной комнате
												(более&nbsp;4х&nbsp;человек)&nbsp;–
												<span> 3&nbsp;500&nbsp;руб/час</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>пост-обработка
												подкаста&nbsp;– <span> от&nbsp;500&nbsp;руб/час</span>&ensp;(запись
												в&nbsp;вокальной комнате).</p>
										</li>
									</ul>
									<h2>Дополнительные услуги:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>создание джингла для&nbsp;подкаста&nbsp;–
												<span> 10&nbsp;000&nbsp;руб</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Чистка речи от&nbsp;пауз хезитации&nbsp;–
												<span> 4&nbsp;000&nbsp;руб.</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Публикация подкаста (включена в&nbsp;стоимость
												регистрация и&nbsp;оформление кабинета)&nbsp;–
												<span> 5&nbsp;000&nbsp;руб</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p> Повторная публикация подкаста&nbsp;–
												<span> 750 руб</span>
											</p>;
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Обработка подкаста (4-6&nbsp;дорожки&nbsp;–
												<span> 7&nbsp;500&nbsp;руб</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>обложка для подкаста&nbsp;–
												<span> 4&nbsp;000&nbsp;руб</span>.</p>
										</li>
									</ul>
									<div className="service-description__ps">
										<p>При аренде студии <span> от&nbsp;10&nbsp;часов</span>
											действуют скидки. Выгодно для&nbsp;регулярных записей
											подкастов.</p>
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
SectionAudioPodcasts.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};