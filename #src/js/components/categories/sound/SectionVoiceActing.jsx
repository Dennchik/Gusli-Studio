import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVoiceActing = ({baseUrl}) => {
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
											 src={getPath('img/main/service/fotoram_bg_12.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_12.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title voice-acting-title'>Дикторская
							озвучка
						</div>
						<div className="service-description__description">
							<ul>
								<li><i className="icon-hand-pointer _icon"></i>Если Вы еще на
									сталкивались с такой задачей как дикторская запись, то Вы не
									представляете, насколько это кропотливый процесс. Постараюсь
									вкратце рассказать, что из себя представляет дикторская речь и
									как ее записать.
								</li>
								<li><i className="icon-hand-pointer _icon"></i>За записью
									дикторской речи к нам обращаются для озвучки рекламы, озвучки
									фильмов, передач, записи подкастов (современных аналогов
									радиопередач) и так далее. Наверняка Вы обращали внимание, что
									ведущие большинства передач обладают отличным произношением и
									приятным голосом и их хочется слушать. А бывают случаи, когда
									с первых слов Вам хочется переключиться на что-то другое. От
									качества чтения текста сильно зависит восприятие слушателя
								</li>
								<li><i className="icon-hand-pointer _icon"></i>Как и в любом
									другом деле, в отработке дикторских навыков нужно много
									времени и упорство. Нельзя получить качественную запись, если
									вы никогда не занимались ею. Профессиональные дикторы
									оттачивают свои навыки годами и их услугами пользуются ведущие
									каналы и передачи. Вы замечали, что у каждого телевизионного
									канала есть свой голос? Это может быть голос непосредственно
									диктора или ключевого ведущего, но факт в том, что Вы сразу
									узнаете голос этого человека и настраиваетесь на нужный лад.
								</li>
								<li><i className="icon-hand-pointer _icon"></i>Если вы —
									профессиональный или начинающий диктор, и вам нужны услуги
									звукозаписи, мы с радостью запишем ваш голос.
								</li>
								<li><i className="icon-hand-pointer _icon"></i>Если вы —
									профессиональный или начинающий диктор, и вам нужны услуги
									звукозаписи, мы с радостью запишем ваш голос.
								</li>
								<li><i className="icon-hand-pointer _icon"></i>Дикторская запись
									в студии
								</li>
								<li><i className="icon-hand-pointer _icon"></i>Приведем
									несколько советов, которые помогут как новичкам, так и опытным
									дикторам.
									<ul className="service-description__sub-items">
										<li><i className="icon-check _icon"></i>Подберём подходящих
											дикторов , в том числе экспатов из любой страны мира
										</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на
											музыкальный фон или напишем авторскую музыку
										</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на
											музыкальный фон или напишем авторскую музыку
										</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на
											музыкальный фон или напишем авторскую музыку
										</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на
											музыкальный фон или напишем авторскую музыку
										</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на
											музыкальный фон или напишем авторскую музыку
										</li>
									</ul>
								</li>
								<div className="service-description__ps">Так же в нашей студии
									можно пройти курсы актера дубляжа, проработать свои
									способности на уроках ораторского искусства с нашим
									профессиональным педагогом. Скачать презентацию можно по
									ссылке - <a className="service-description__linck"
															href={getPath('img/main/service/pr-do.pdf')}
															target="_blanck"> Основы дикторского
										мастерства</a></div>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">

				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title 
						dubbing-title'>Дубляж
						</div>
						<div className="service-description__description">
							<ul className="service-description__row">
								<li><i className="icon-hand-pointer _icon"></i>Обратившись
									к&nbsp;нам, чтобы&nbsp;озвучить рекламу, вы&nbsp;непременно
									останетесь довольны! Мы&nbsp;работаем до&nbsp;достижения
									наивысшего результата. Мы поможем Вам&nbsp;подобрать:
								</li>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>Женские голоса</li>
									<li><i className="icon-check _icon"></i>Мужские голоса</li>
									<li><i className="icon-check _icon"></i>Детские голоса</li>
									<li><i className="icon-check _icon"></i>Иностранные голоса
									</li>
									<li><i className="icon-check _icon"></i>Дикторы для аудиокниг
									</li>
									<li><i className="icon-check _icon"></i>Пародийные голоса</li>
								</ul>
								<h2>Студийная дикторская озвучка ролика</h2>
								<p className="service-description__ps">В&nbsp;студии установлено
									оборудование современного уровня, а&nbsp;режиссеры работают на
									новейшем программном обеспечении. Таким образом,
									мы&nbsp;достигаем идеального качества аудиодорожки,
									где&nbsp;исключены звуковые артефакты (призвуки, помехи,
									и&nbsp;тому подобные дефекты).</p>
							</ul>
							<ul className="service-description__row">
								<li><i className="icon-hand-pointer _icon"></i>Озвучивание
									отличается для каждого конкретного проекта:
								</li>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>реклама;</li>
									<li><i className="icon-check _icon"></i>аудиокниги;</li>
									<li><i className="icon-check _icon"></i>дубляж фильма или
										сериала;
									</li>
									<li><i className="icon-check _icon"></i>игровые аудиоролики;
									</li>
									<li><i className="icon-check _icon"></i>аудиогиды;</li>
								</ul>
								<p className="service-description__ps">Профессиональные
									исполнители выполнят озвучивание любого объема и&nbsp;уровня
									сложности в&nbsp;указанный срок</p>
								<p className="service-description__ps">Если вы никогда
									не&nbsp;сотрудничали с&nbsp;дикторами, то&nbsp;мы советуем
									воспользоваться услугами режиссера. Не&nbsp;менее важен темп
									исполнителя: одни специализируются на&nbsp;быстрых
									и&nbsp;коротких роликах, другие красиво читают только
									размеренно (идеальный диктор для&nbsp;озвучки книг).</p>
								<p className="service-description__ps">С&nbsp;нами работают
									профессиональные чтецы аудиокниг, рекламных дикторов
									и&nbsp;других специалистов с&nbsp;идеальным владением техникой
									речи. Каждый из&nbsp;них обладает разной скоростью речи,
									отличается тембр.</p>
							</ul>
							<div className="service-description__row">
								<p><i className="icon-hand-pointer _icon"></i>Предлагаем
									заказать голос диктора для&nbsp;мужской, женской
									и&nbsp;детской озвучки ролика
								</p>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>актеры дубляжа;</li>
									<li><i className="icon-check _icon"></i>рекламные исполнители;
									</li>
									<li><i className="icon-check _icon"></i>чтецы аудиокниг,
										саммари;
									</li>
									<li><i className="icon-check _icon"></i>пародисты;</li>
									<li><i className="icon-check _icon"></i>специалисты закадровой
										озвучки;
									</li>
									<li><i className="icon-check _icon"></i>вокалисты;</li>
									<p className="service-description__ps">Возраст тоже имеет
										огромное значение. Мы&nbsp;предлагаем голоса детей, людей
										среднего возраста и&nbsp;пожилых.</p>
									<p className="service-description__ps">Мы поможем найти
										носителей иностранных языков. Можно подобрать исполнителей
										с&nbsp;очень похожими звуковыми параметрами для&nbsp;начитки
										текста на&nbsp;разных языках.</p>
									<p className="service-description__ps">Дикторская озвучка
										с&nbsp;созданием сценария и&nbsp;записью аудиоролика
										для&nbsp;рекламы обойдется дороже, так&nbsp;как включает
										обработку, подбор фона, сведение, наложение звуковых
										эффектов и&nbsp;другую работу.</p>
								</ul>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionVoiceActing.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};