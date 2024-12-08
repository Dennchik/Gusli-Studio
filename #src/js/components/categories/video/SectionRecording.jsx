import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionRecording = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_11.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_11.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title video-recording-title">
							Видеосъёмка
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Основные типы видеосъемки:</h2>
								<p><i className="icon-camera-film _icon"></i>Видеосъемка&nbsp;-
									это &nbsp;важный инструмент для&nbsp;создания качественных
									видеороликов. Каждый тип съемки имеет свои особенности
									и&nbsp;позволяет достичь определенных целей. Давайте
									разберемся, какие типы видеосъемки существуют
									и&nbsp;почему они важны для&nbsp;вашего бизнеса.
								</p>
								<h2>Репортажная видеосъемка:</h2>
								<p><i className="icon-camera-film _icon"></i>Репортажная съемка
									позволяет запечатлеть реальные эмоции и моменты. Она подходит
									для создания новостных сюжетов, отчетов о мероприятиях,
									презентациях и других событий. Этот тип съемки помогает
									создать прямое и интуитивное взаимодействие между зрителем и
									контентом.
								</p>
								<h2>Постановочная видеосъемка:</h2>
								<p><i className="icon-camera-film _icon"></i>Этот тип съемки
									используется для&nbsp;создания видео по&nbsp;определенному
									сценарию. Камера и&nbsp;все предварительные настройки задаются
									заранее, что&nbsp;позволяет создать более глубокое погружение
									в&nbsp;атмосферу фильма или&nbsp;рекламы. Этот тип съемки
									подходит для&nbsp;создания короткометражных фильмов,
									рекламы и&nbsp;видеоклипов.
								</p>
								<h2>Музыкальные клипы:</h2>
								<p><i className="icon-camera-film _icon"></i>Музыкальные клипы
									часто являются очень динамичными и&nbsp;зрелищными видео,
									которые визуально сопровождают музыкальную композицию.
									Этот тип съемки может быть довольно экспериментальным
									и&nbsp;оригинальным. Он&nbsp;помогает создать настроение
									и&nbsp;эмоции, которые поддерживаются музыкой.
								</p>
								<h2>Рекламный ролик:</h2>
								<p><i className="icon-camera-film _icon"></i>Рекламный ролик
									направлен на&nbsp;продвижение товара или&nbsp;услуги обычно
									имеет целью заинтересовать потенциальных клиентов.
									Он&nbsp;может быть креативным или&nbsp;информационным,
									но&nbsp;главной целью является поднятие осведомленности
									о&nbsp;продукте и&nbsp;убеждение зрителей в&nbsp;его
									необходимости и&nbsp;преимуществах.</p>
								<h2>Корпоративная видеосъемка</h2>
								<p><i className="icon-camera-film _icon"></i>Корпоративная
									видеосъемка может включать в&nbsp;себя
									различные типы видео, такие как&nbsp;промо-ролики,
									презентационные видео, обучающие ролики, отчеты
									о&nbsp;мероприятиях и&nbsp;т.д. Каждый тип видеосъемки
									имеет свою специфику и&nbsp;используется в&nbsp;разных
									ситуациях. Главным форматом корпоративной видеосъемки является
									фильм, который рассказывает о&nbsp;компании или&nbsp;продукте
									и&nbsp;показывает его&nbsp;преимущества</p>
								<p><i className="icon-camera-film _icon"></i>Основное отличие
									корпоративной видеосъемки от&nbsp;репортажной заключается
									в&nbsp;акценте на&nbsp;эстетической части. Сцены,
									диалоги, закадровый текст и&nbsp;графика тщательно
									подбираются и&nbsp;согласовываются с&nbsp;заказчиком,
									чтобы&nbsp;продемонстрировать компанию с&nbsp;наилучшей
									стороны. Также в&nbsp;корпоративной видеосъемке
									более&nbsp;важна эстетическая составляющая, чем
									информационная. С&nbsp;помощью корпоративной видеосъемки
									вы&nbsp;можете привлечь новых клиентов, рассказать
									о&nbsp;новой продукции и &nbsp;поднять настроение работникам.
								</p>
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
								<h2>Сколько стоит съемка и монтаж видео:</h2>
								<h3>Факторы, влияющие на&nbsp;стоимость съемки и&nbsp;монтажа
									видео:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Тип видеопроекта:
										стоимость съемки видео зависит от&nbsp;типа проекта.
										Например, съемка короткометражного фильма
										или&nbsp;музыкального клипа может потребовать больше
										времени и&nbsp;ресурсов, чем&nbsp;съемка простого интервью
										или&nbsp;рекламного ролика.
									</li>
									<li><i className="icon-check _icon"></i>Продолжительность
										съемки: количество дней, затраченных на&nbsp;съемку,
										также влияет на&nbsp;стоимость. Съемка, которая занимает
										несколько дней, может стоить дороже, чем&nbsp;однодневная
										съемка.
									</li>
									<li><i className="icon-check _icon"></i>Расположение съемки:
										если&nbsp;съемка проходит в&nbsp;удаленных
										или&nbsp;труднодоступных местах, это&nbsp;может увеличить
										стоимость из-за&nbsp;дополнительных расходов
										на&nbsp;транспорт и&nbsp;проживание съемочной группы.
									</li>
									<li><i className="icon-check _icon"></i>Оборудование:
										использование профессионального оборудования,
										такого как&nbsp;высококачественные камеры, объективы,
										световое
										оборудование и&nbsp;грим, может увеличить общую стоимость
										съемки.
									</li>
									<li><i className="icon-check _icon"></i>Команда съемки: размер
										съемочной группы также влияет на&nbsp;стоимость. Большие
										проекты, требующие большой команды, могут быть дороже
										в&nbsp;обслуживании по&nbsp;сравнению с&nbsp;небольшими
										съемками, где&nbsp;задействованы только несколько
										специалистов.
									</li>
								</ul>
								<h3>Факторы, влияющие на&nbsp;стоимость монтажа видео:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Объем &nbsp; сложность
										материала: чем &nbsp;больше материала требуется обработать
										и&nbsp;монтировать, тем&nbsp;выше будет стоимость монтажа.
										Сложные спецэффекты, анимация и цветокоррекция также могут
										увеличить стоимость.
									</li>
									<li><i className="icon-check _icon"></i>Продолжительность
										видео: монтаж видео с&nbsp;разной продолжительностью может
										иметь разные цены. Длинные видеоролики обычно требуют
										больше времени для&nbsp;монтажа и&nbsp;могут быть более
										дорогими.
									</li>
									<li><i className="icon-check _icon"></i>Наличие аудио:
										если&nbsp;вам нужно отредактировать и &nbsp;обработать
										аудио вместе с&nbsp;видео, это&nbsp;также повлияет
										на&nbsp;стоимость монтажа.
									</li>
									<li><i className="icon-check _icon"></i>Уровень опыта
										монтажера: опытные монтажеры могут взимать более высокую
										стоимость за&nbsp;свои услуги, так&nbsp;как&nbsp;они
										способны предоставить более высококачественные результаты.
									</li>
									<p className="service-description__ps">Ориентировочные цены
										на&nbsp;съемку и&nbsp;монтаж видео
										в&nbsp;России могут значительно варьироваться
										в&nbsp;зависимости от&nbsp;вышеперечисленных факторов.</p>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionRecording.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};