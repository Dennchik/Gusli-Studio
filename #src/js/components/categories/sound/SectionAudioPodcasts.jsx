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
			<div className="service-description__column-parallax">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_10.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_10.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<div className="service-description__title">
							Аудио подкасты
						</div>
						<div className="service-description__description">
							<h2>
								Профессиональная запись подкаста в&nbsp;студии звукозаписи Гусли
							</h2>
							<p><i className="icon-volume-high _icon"></i>
								<span>Подкасты </span>- это&nbsp;отличный способ выражения себя
								для&nbsp;тех, кто хочет поделиться своими мыслями
								и&nbsp;знаниями с&nbsp;другими людьми. Как&nbsp;правило,
								подкасты ведут профессионалы в&nbsp;своей области
								или&nbsp;харизматичные ведущие, которые могут заинтересовать
								своей речью.</p>
							<p>Такой формат аудио-интервью подходит для&nbsp;людей,
								у&nbsp;которых нет&nbsp;времени на&nbsp;написание длинных постов
								в&nbsp;социальных сетях, а&nbsp;затем
								на&nbsp;их&nbsp;редактирование.</p>
							<p>Кроме того, подкасты - это&nbsp;оригинальная и&nbsp;пока еще
								свободная ниша в&nbsp;онлайн-маркетинге.</p>
							<p>Если вы хотите записать свой подкаст, вы&nbsp;можете сделать
								это самостоятельно или&nbsp;заказать запись вместе
								с&nbsp;пост-обработкой в&nbsp;нашей студии звукозаписи.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className="service-description__content _container">
						<div className="service-description__description">
							<h2>Цены на запись подкаста:</h2>
							<ul>
								<li><i className="icon-check _icon"></i>Запись в&nbsp;вокальной
									комнате – <span>2&nbsp;000&nbsp;руб/час.</span>
									<p>Комфортно для&nbsp;записи 1-3 человек. Подключим удалённого
										спикера по&nbsp;zoom звонку при&nbsp;необходимости.</p>
									<p>Комната хорошо подойдёт для&nbsp;записи лекций
										или&nbsp;озвучки аудиокниг. Распечатаем заранее текст или
										загрузим на&nbsp;планшет для&nbsp;вашего удобства.</p>
									<p>Запись подкаста в&nbsp;вокальной комнате (более 4х человек)
										– <span>3&nbsp;500&nbsp;руб/час</span>.</p>
								</li>
								<li><i className="icon-check _icon"></i>пост-обработка подкаста
									– <span>от&nbsp;500&nbsp;руб/час</span> (запись
									в&nbsp;вокальной комнате)
								</li>
							</ul>
							<h2>В пост-обработку входит:</h2>
							<ul>
								<li><i className="icon-check _icon"></i>редакция материала
									(удаление фальшстартов, мата, фоновых шумов, склейка
									отобранных дублей).
									<p>Делаем 1 итерацию правок бесплатно.</p>
								</li>
								<li><i className="icon-check _icon"></i>добавление музыкальной
									подложки, джинглов и&nbsp;звуковых эффектов (FX)
									(предоставляются клиентом)
								</li>
								<li><i className="icon-check _icon"></i>в пост-обработку входит
									услуга по&nbsp;очистке речи от&nbsp;пауз хезитации
									(&quot;ммм&quot;, &quot;эээ&quot;, &quot;ааа&quot;)
									или&nbsp;пустыми словами
									(&quot;это&nbsp;самое&quot;, &quot;такой&quot;, &quot;так&nbsp;сказать&quot;, &quot;значит&quot;, &quot;вот&quot;, &quot;типа&quot;, &quot;ну&quot;, &quot;как&nbsp;бы&quot;).
								</li>
								<li><i className="icon-check _icon"></i>сведение</li>
								<li><i className="icon-check _icon"></i>мастеринг и мастеринг
									для iTunes
								</li>
								<div className="service-description__ps">При&nbsp;заказе
									пост-обработки клиент получает готовый подкаст
									для&nbsp;публикации на&nbsp;профильных площадках (Apple
									Подкасты, Google Подкасты и&nbsp;т.п.).
									<br />
									Срок сдачи готового материала: 1-4&nbsp;дня.
								</div>
							</ul>
							<h2>Дополнительные услуги:</h2>
							<ul>
								<li><i className="icon-check _icon"></i>создание джингла
									для&nbsp;подкаста – <span>10&nbsp;000&nbsp;руб</span>.
								</li>
								<li><i className="icon-check _icon"></i>чистка речи от&nbsp;пауз
									хезитации – <span>4&nbsp;000&nbsp;руб</span>.
								</li>
								<li><i className="icon-check _icon"></i>публикация подкаста
									(включена в&nbsp;стоимость регистрация и&nbsp;оформление
									кабинета) – <span>5&nbsp;000&nbsp;руб</span>.
								</li>
								<li><i className="icon-check _icon"></i>повторная публикация
									подкаста – <span>750 руб</span>.
								</li>
								<li><i className="icon-check _icon"></i>обработка подкаста (4-6
									дорожки) – <span>7&nbsp;500&nbsp;руб</span>.
								</li>
								<li><i className="icon-check _icon"></i>обложка для подкаста
									– <span>4&nbsp;000&nbsp;руб</span>.
								</li>
								<div className="service-description__ps">При аренде студии
									от&nbsp;10&nbsp;часов действуют скидки. Выгодно
									для&nbsp;регулярных записей подкастов.
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column-parallax">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_11.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_11.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className="service-description__content _container">
						<div className="service-description__description">
							<h2>В Студии Гусли есть всё необходимое для комфортной и
								профессиональной записи подкаста:</h2>
							<ul>
								<li><i className="icon-check _icon"></i>комната
									с&nbsp;профессиональной звукоизоляцией
								</li>
								<li><i className="icon-check _icon"></i>шустрый Wi-Fi – особенно
									важно при&nbsp;видео звонках и&nbsp;прямых видео-трансляциях
								</li>
								<li><i className="icon-check _icon"></i>интерьер студии
									располагает к&nbsp;приятному и&nbsp;искреннему разговору
								</li>
								<li><i className="icon-check _icon"></i>угощаем гостей какао,
									лимонадом, кофе или&nbsp;чаем. С&nbsp;собой можно приносить
									алкоголь
								</li>
								<li><i className="icon-check _icon"></i>быстрые сроки сдачи
									материала (от 2-х часов без обработки)
								</li>
								<li><i className="icon-check _icon"></i>храним записанный
									материал (до&nbsp;1-го&nbsp;месяца)
								</li>
								<li><i className="icon-check _icon"></i>удобное расположение –
									центр Обнинска (5 мин&nbsp;от&nbsp;остановки Дом учёных)
								</li>
								<li><i className="icon-check _icon"></i>работаем
									с&nbsp;юр.лицами по&nbsp;ЭДО
								</li>
								<li><i className="icon-check _icon"></i>отлично подходит
									для&nbsp;фото-видеосъёмки. Дадим рекомендации
									по&nbsp;видеосъёмке: сколько нужно света, куда его поставить
									и&nbsp;в&nbsp;какой одежде приходить гостям для&nbsp;лучшей
									картинки. Готовы взять на&nbsp;себя съёмку и&nbsp;монтаж
									подкаста (за&nbsp;дополнительную плату)
								</li>
								<div className="service-description__ps">Нашим клиентам
									не&nbsp;надо думать об&nbsp;организации записи
									и&nbsp;отвлекаться на&nbsp;административную работу&nbsp;– все
									хлопоты мы&nbsp;берём на&nbsp;себя. Ведите беседу с&nbsp;вашим
									гостем и&nbsp;больше ни&nbsp;о&nbsp;чём не&nbsp;думайте.
								</div>
							</ul>
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