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
											 src={getPath('img/parallax/sound/fotoram_bg_08.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_08.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title voice-acting-title">
							Дикторская озвучка</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<p><i className="icon-hand-pointer _icon"></i>
											Если Вы еще не&nbsp;сталкивались с&nbsp;такой задачей
											как&nbsp;дикторская запись, то&nbsp;Вы
											не&nbsp;представляете, насколько это&nbsp;кропотливый
											процесс. Постараюсь вкратце рассказать,
											что&nbsp;из&nbsp;себя представляет дикторская речь
											и&nbsp;как ее&nbsp;записать.
										</p>
										<p><i className="icon-hand-pointer _icon"></i>
											За записью дикторской речи к&nbsp;нам обращаются для
											озвучки рекламы, озвучки фильмов, передач, записи
											подкастов (современных аналогов радиопередач)
											и&nbsp;так&nbsp;далее. Наверняка Вы обращали внимание,
											что&nbsp;ведущие большинства передач обладают отличным
											произношением и&nbsp;приятным голосом
											и&nbsp;их&nbsp;хочется слушать. А бывают случаи,
											когда&nbsp;с&nbsp;первых слов Вам&nbsp;хочется
											переключиться на&nbsp;что-то&nbsp;другое. От качества
											чтения текста сильно зависит восприятие слушателя.
										</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Как и&nbsp;в&nbsp;любом другом деле, в&nbsp;отработке
											дикторских навыков нужно много времени
											и&nbsp;упорство. Нельзя получить качественную запись,
											если&nbsp;вы&nbsp;никогда не&nbsp;занимались ею.
											Профессиональные дикторы оттачивают свои навыки годами
											и&nbsp;их&nbsp;услугами пользуются ведущие каналы
											и&nbsp;передачи. Вы замечали, что&nbsp;у&nbsp;каждого
											телевизионного канала есть свой голос? Это&nbsp;может
											быть голос непосредственно диктора или&nbsp;ключевого
											ведущего, но&nbsp;факт в&nbsp;том, что&nbsp;Вы сразу
											узнаете голос этого человека и настраиваетесь
											на&nbsp;нужный лад.
										</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Если вы&nbsp;— профессиональный или&nbsp;начинающий
											диктор, и&nbsp;вам нужны услуги звукозаписи,
											мы&nbsp;с&nbsp;радостью запишем ваш&nbsp;голос.
										</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Если вы&nbsp;— профессиональный или&nbsp;начинающий
											диктор, и&nbsp;вам нужны услуги звукозаписи, мы
											с&nbsp;радостью запишем ваш голос.
										</p>
										<p><i className="icon-hand-pointer _icon"></i>
											Дикторская запись в&nbsp;студии.
										</p>
									</div>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Приведем несколько советов, которые помогут
											как &nbsp;новичкам, так &nbsp; &nbsp;опытным
											дикторам.</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Приходите в&nbsp;студию подготовленными. Стоить
													потратить
													время на&nbsp;отработку нужного текста дома
													и&nbsp;попробовать слушать себя в&nbsp;записи
													(воспользуйтесь для&nbsp;этого
													хот&nbsp; бы&nbsp;диктофоном
													в&nbsp;своем мобильном устройстве). Вы&nbsp;должны
													быть
													готовы на&nbsp;110%, чтобы&nbsp;во&nbsp;время записи
													в&nbsp;студии не&nbsp;возникло никаких проблем;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Берегите свой голос. В&nbsp;день записи стоит
													воздержаться
													от&nbsp;употребления алкоголя, сладкого, жирного,
													острого
													и&nbsp;сильно соленого. Также не&nbsp;стоит курить.
													Перед&nbsp;записью, разогрейте свой голос, сделав
													необходимые упражнения;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Не волнуйтесь. В &nbsp;некоторых студиях
													к &nbsp;клиентам
													относятся так, что &nbsp;они, стоя перед микрофоном,
													чувствуют
													себя не &nbsp;в&nbsp;своей тарелке. Этот момент очень
													индивидуален у &nbsp;каждого человека, но &nbsp;мы
													очень
													стараемся «подружится» с &nbsp;каждым нашим артистом,
													чтобы &nbsp;тот &nbsp;мог расслабиться
													и &nbsp;получать
													удовольствие, хорошо выполняя свою работу;</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="service-description__ps">
									Так же в нашей студии можно пройти курсы актера дубляжа,
									проработать свои способности на&nbsp;уроках ораторского
									искусства с&nbsp;нашим профессиональным педагогом.
									Скачать презентацию можно по&nbsp;ссылке&nbsp;-
									<a className="service-description__link"
										 href={getPath('img/documents/pr-do.pdf')}
										 target="_blanck"> Основы дикторского мастерства</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title'>
							Дубляж
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<p><i className="icon-hand-pointer _icon"></i>Обратившись
											к&nbsp;нам, чтобы&nbsp;озвучить рекламу,
											вы&nbsp;непременно
											останетесь довольны! Мы&nbsp;работаем до&nbsp;достижения
											наивысшего результата. Мы поможем Вам&nbsp;подобрать:
										</p>
										<ul>
											<li><i className="icon-check _icon"></i>Женские голоса
											</li>
											<li><i className="icon-check _icon"></i>Мужские голоса
											</li>
											<li><i className="icon-check _icon"></i>Детские голоса
											</li>
											<li><i className="icon-check _icon"></i>Иностранные голоса
											</li>
											<li><i className="icon-check _icon"></i>Дикторы для
												аудиокниг
											</li>
											<li><i className="icon-check _icon"></i>Пародийные голоса
											</li>
										</ul>
										<h2>Студийная дикторская озвучка ролика</h2>
										<p className="service-description__ps">В&nbsp;студии
											установлено
											оборудование современного уровня, а&nbsp;режиссеры
											работают на
											новейшем программном обеспечении. Таким образом,
											мы&nbsp;достигаем идеального качества аудиодорожки,
											где&nbsp;исключены звуковые артефакты (призвуки, помехи,
											и&nbsp;тому подобные дефекты).</p>
									</div>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h3>
											Озвучивание отличается для&nbsp;каждого конкретного
											проекта:
										</h3>
										<ul>
											<li><i className="icon-check _icon"></i>реклама;</li>
											<li><i className="icon-check _icon"></i>аудиокниги;</li>
											<li><i className="icon-check _icon"></i>дубляж фильма или
												сериала;
											</li>
											<li><i className="icon-check _icon"></i>игровые
												аудиоролики;
											</li>
											<li><i className="icon-check _icon"></i>аудиогиды;</li>
										</ul>
										<p className="service-description__ps">Профессиональные
											исполнители выполнят озвучивание любого объема
											и&nbsp;уровня
											сложности в&nbsp;указанный срок</p>
										<p className="service-description__ps">Если вы никогда
											не&nbsp;сотрудничали с&nbsp;дикторами, то&nbsp;мы советуем
											воспользоваться услугами режиссера. Не&nbsp;менее важен
											темп
											исполнителя: одни специализируются на&nbsp;быстрых
											и&nbsp;коротких роликах, другие красиво читают только
											размеренно (идеальный диктор для&nbsp;озвучки книг).</p>
										<p className="service-description__ps">С&nbsp;нами работают
											профессиональные чтецы аудиокниг, рекламных дикторов
											и&nbsp;других специалистов с&nbsp;идеальным владением
											техникой
											речи. Каждый из&nbsp;них обладает разной скоростью речи,
											отличается тембр.</p>
									</div>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<p><i className="icon-hand-pointer _icon"></i>
											Предлагаем заказать голос диктора для&nbsp;мужской,
											женской и&nbsp;детской озвучки ролика
										</p>
										<ul>
											<li><i className="icon-check _icon"></i>актеры дубляжа;
											</li>
											<li><i className="icon-check _icon"></i>рекламные
												исполнители;
											</li>
											<li><i className="icon-check _icon"></i>чтецы аудиокниг,
												саммари;
											</li>
											<li><i className="icon-check _icon"></i>пародисты;</li>
											<li><i className="icon-check _icon"></i>специалисты
												закадровой озвучки;
											</li>
											<li><i className="icon-check _icon"></i>вокалисты.</li>
											<p className="service-description__ps">
												Возраст тоже имеет огромное значение. Мы&nbsp;предлагаем
												голоса детей, людей среднего возраста
												и&nbsp;пожилых.</p>
											<p className="service-description__ps">Мы поможем найти
												носителей иностранных языков. Можно подобрать
												исполнителей с&nbsp;очень похожими звуковыми параметрами
												для&nbsp;начитки текста на&nbsp;разных языках.</p>
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
			</div>
		</div>
	);
};
SectionVoiceActing.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};