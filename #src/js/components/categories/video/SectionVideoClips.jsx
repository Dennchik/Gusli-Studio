import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoClips = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_14.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_14.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							видеоклипы
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">

								<p><i className="icon-clapper _icon"></i>Для создания
									Хотите оставить незабываемые впечатления от&nbsp;вашего
									праздника
									или&nbsp;мероприятия? Тогда обязательно сделайте себе
									и&nbsp;своим гостям подарок в&nbsp;виде профессионального
									видеоклипа! Наши опытные специалисты создадут для&nbsp;вас
									уникальное кинематографическое произведение, которое будет
									наполнено эмоциями и&nbsp;запомнится на&nbsp;долгие годы.
								</p>
								<p>Благодаря современному оборудованию и&nbsp;креативному
									подходу к&nbsp;съемке, мы&nbsp;создаем клипы, которые будут
									удивлять и&nbsp;восхищать вас&nbsp;каждый раз, когда вы
									их&nbsp;смотрите. Будь то&nbsp;свадебная церемония, день
									рождения, корпоративное мероприятие или&nbsp;презентация
									продукта&nbsp;- мы найдем индивидуальный подход
									и&nbsp;подчеркнем важность каждого момента.</p>
								<p>Не упустите возможность сохранить самые яркие моменты вашей
									жизни в виде прекрасного видеоклипа. Обратитесь
									к&nbsp;профессионалам в своем деле и наслаждайтесь просмотром
									вашего личного шедевра снова и&nbsp;снова!</p>
								<h3>Съёмка видеоклипа включает несколько этапов:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Обсуждение проекта.
										Нужно познакомиться с&nbsp;музыкальной композицией,
										подобрать референсные видео, обсудить бюджет и&nbsp;идею
										клипа. Затем подписать договор на&nbsp;съёмку и&nbsp;сроки
										сдачи проекта;
									</li>
									<li><i className="icon-check _icon"></i>Разработка сценария.
										В &nbsp;течение трёх дней пишут черновой сценарий, обсуждают
										и &nbsp;утверждают его. Затем подбирают локации
										для&nbsp;съёмки, реквизит для&nbsp;реализации сюжета,
										проводят кастинг и&nbsp;подбирают актёрский состав;
									</li>
									<li><i className="icon-check _icon"></i>Съёмка клипа.
										На&nbsp;съёмочной площадке выставляют профессиональное
										освещение, создают задуманную атмосферу клипа с&nbsp;помощью
										световых решений. Съёмку проводят строго по&nbsp;графику
										и&nbsp;раскадровки;
									</li>
									<li><i className="icon-check _icon"></i>Монтаж
										и&nbsp;цветокоррекция. В&nbsp;заключительный этап
										производства видеоклипа отбирают удачные дубли, собирают
										черновой монтаж, делают закрытый просмотр, обсуждают
										и&nbsp;утверждают монтаж, делают профессиональную
										цветокоррекцию.
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
SectionVideoClips.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};