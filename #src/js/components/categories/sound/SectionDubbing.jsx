import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionDubbing = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_13.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_13.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<div className="service-description__title dubbing-title">Дубляж</div>
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
SectionDubbing.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};