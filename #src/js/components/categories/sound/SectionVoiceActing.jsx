import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVoiceActing = ({ baseUrl }) => {
	const isHomepage = location.pathname === '/';
	useEffect(() => {

	}, []);

	useEffect(() => {
		animateTitles(
			'.service-description__title',
			'.service-description__title',
			'.service-description__title',
			'=150',
			'=150',
		);
		refreshScrollTrigger();
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
						<div className='service-description__title voice-acting-title'>Дикторская озвучка</div>
						<div className="service-description__description">
							<ul>
								<li><i className="icon-hand-pointer _icon"></i>Если Вы еще на сталкивались с такой задачей как дикторская запись, то Вы не представляете, насколько это кропотливый процесс. Постараюсь вкратце рассказать, что из себя представляет дикторская речь и как ее записать.</li>
								<li><i className="icon-hand-pointer _icon"></i>За записью дикторской речи к нам обращаются для озвучки рекламы, озвучки фильмов, передач, записи подкастов (современных аналогов радиопередач) и так далее. Наверняка Вы обращали внимание, что ведущие большинства передач обладают отличным произношением и приятным голосом и их хочется слушать. А бывают случаи, когда с первых слов Вам хочется переключиться на что-то другое. От качества чтения текста сильно зависит восприятие слушателя</li>
								<li><i className="icon-hand-pointer _icon"></i>Как и в любом другом деле, в отработке дикторских навыков нужно много времени и упорство. Нельзя получить качественную запись, если вы никогда не занимались ею. Профессиональные дикторы оттачивают свои навыки годами и их услугами пользуются ведущие каналы и передачи. Вы замечали, что у каждого телевизионного канала есть свой голос? Это может быть голос непосредственно диктора или ключевого ведущего, но факт в том, что Вы сразу узнаете голос этого человека и настраиваетесь на нужный лад.</li>
								<li><i className="icon-hand-pointer _icon"></i>Если вы — профессиональный или начинающий диктор, и вам нужны услуги звукозаписи, мы с радостью запишем ваш голос.</li>
								<li><i className="icon-hand-pointer _icon"></i>Если вы — профессиональный или начинающий диктор, и вам нужны услуги звукозаписи, мы с радостью запишем ваш голос.</li>
								<li><i className="icon-hand-pointer _icon"></i>Дикторская запись в студии</li>
								<li><i className="icon-hand-pointer _icon"></i>Приведем несколько советов, которые помогут как новичкам, так и опытным дикторам.
									<ul className="service-description__sub-items">
										<li><i className="icon-check _icon"></i>Подберём подходящих дикторов , в том числе экспатов из любой страны мира</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на музыкальный фон или напишем авторскую музыку</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на музыкальный фон или напишем авторскую музыку</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на музыкальный фон или напишем авторскую музыку</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на музыкальный фон или напишем авторскую музыку</li>
										<li><i className="icon-check _icon"></i>Выкупим лицензию на музыкальный фон или напишем авторскую музыку</li>
									</ul>
								</li>
								<div className="service-description__ps">Так же в нашей студии можно пройти курсы актера дубляжа, проработать свои способности на уроках ораторского искусства с нашим профессиональным педагогом. Скачать презентацию можно по ссылке -  <a className="service-description__linck" href={getPath('img/main/service/pr-do.pdf')} target="_blanck"> Основы дикторского мастерства</a></div>
							</ul>
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