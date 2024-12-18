import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoRedaction = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_08.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_08.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Видеомонтаж
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>
											Что такое видеомонтаж?:</h2>
										<p>Видеомонтаж - это&nbsp;процесс обработки видеоматериала,
											в &nbsp;результате которого получается единое
											и&nbsp;цельное
											произведение: фильм, видеоролик, телепередача, музыкальный
											клип или&nbsp;рекламный ролик. Монтаж в&nbsp;кино&nbsp;-
											и&nbsp;видеопроизводстве не&nbsp;менее важен, чем&nbsp;сам
											съемочный процесс. Благодаря монтажу можно задать нужную
											атмосферу и&nbsp;ритм повествования. Плохой
											монтаж может испортить и&nbsp;перечеркнуть всю проделанную
											работу, а&nbsp;качественный монтаж, наоборот, может
											спасти,
											казалось&nbsp;бы, безнадёжный исходный материал.</p>
										<h2>
											Зачем нужен видеомонтаж?</h2>
										<p><i className="icon-camera-film _icon"></i>
											Сохранение единства времени, действия
											и&nbsp;пространства&nbsp;- благодаря этому зритель верит,
											что&nbsp;происходящее на&nbsp;экране, действительно
											существует.</p>
										<p><i className="icon-camera-film _icon"></i>
											Создание и&nbsp;поддержание ритма повествования. Речь
											не&nbsp;только о&nbsp;музыкальных клипах и&nbsp;рекламе,
											где&nbsp;действие происходит под &nbsp;музыку. В&nbsp;кино
											тоже&nbsp;важно следить за&nbsp;тем, чтобы&nbsp;посреди
											экшен-сцены не&nbsp;было длинного кадра, на&nbsp;котором
											ничего не&nbsp;происходит.</p>
										<p><i className="icon-camera-film _icon"></i>
											Создание и поддержание комфортного восприятия информации.
											Или&nbsp;дискомфортного, если&nbsp;цель видео&nbsp;-
											эпатировать зрителя.</p>
										<p><i className="icon-camera-film _icon"></i>
											Передача эмоций.</p>
										<p><i className="icon-camera-film _icon"></i>
											Создание и&nbsp;поддержание напряжения.</p>
										<h2>Виды Видеомонтажа:</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>
													<span>Линейный монтаж:</span> это&nbsp;классический
													и&nbsp;наиболее распространенный вид монтажа.
													Он&nbsp;предполагает последовательное соединение сцен
													и&nbsp;кадров, создавая хронологическую историю.
													Этот&nbsp;тип монтажа наиболее подходит
													для&nbsp;повествовательных фильмов
													и&nbsp;видеороликов;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Монтаж по совпадению:</span> основан
													на&nbsp;создании визуальных и &nbsp;звуковых
													ассоциаций между разными кадрами или элементами.
													Это&nbsp;может быть использовано
													для&nbsp;подчеркивания темы, символики
													или&nbsp;эмоций;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Параллельный монтаж:</span> монтаж
													по&nbsp;сериям предполагает объединение кадров
													в&nbsp;логические группы или&nbsp;серии.
													Это&nbsp;может быть полезно для&nbsp;упорядочивания
													информации или&nbsp;создания переходов между сценами;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Смешанный монтаж:</span> смешанный монтаж
													объединяет разные виды монтажа, чтобы&nbsp;создать
													уникальное визуальное восприятие. Режиссеры могут
													использовать этот&nbsp;подход, чтобы&nbsp;выразить
													свой индивидуальный стиль и&nbsp;подчеркнуть важные
													моменты в&nbsp;истории;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>
													<span>Монтаж с&nbsp;использованием временной линии:</span> динамический
													монтаж использует быстрые смены кадров
													и&nbsp;динамичную редакцию, чтобы создать чувство
													напряжения и&nbsp;действия. Этот &nbsp;стиль часто
													применяется в&nbsp;экшн-фильмах и&nbsp;видеороликах;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Монтаж на&nbsp;музыку:</span> монтаж
													на&nbsp;музыку синхронизирует кадры с&nbsp;ритмом
													и&nbsp;музыкальным сопровождением.
													Это&nbsp;создает эмоциональное и&nbsp;визуальное
													воздействие и&nbsp;может быть&nbsp;особенно
													эффективным в&nbsp;музыкальных видеороликах
													и&nbsp;концертных фильмах;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Интерактивный монтаж:</span> интерактивный
													монтаж используется в&nbsp;видеоиграх и виртуальной
													реальности, где &nbsp;зритель может взаимодействовать
													с&nbsp;сюжетом и&nbsp;влиять на&nbsp;развитие истории;
												</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p><span>Монтаж в&nbsp;документальных фильмах:</span> в
													документальных фильмах монтаж может&nbsp;быть
													использован для&nbsp;создания ритма, подчеркивания
													ключевых моментов и&nbsp;передачи информации.</p>
											</li>
										</ul>
									</div>
								</div>
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
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Стоимость монтажа видео: основные факторы, влияющие
											на&nbsp;цену</h2>
										<p>Ⓜ️ Квалификация монтажника является одним
											из&nbsp;ключевых
											факторов, влияющих на&nbsp;цену. Профессионалы
											с&nbsp;богатым
											опытом и&nbsp;навыками, как&nbsp;правило, взимают более
											высокую плату за&nbsp;свои услуги, поскольку
											они&nbsp;способны
											обеспечить более высокое качество монтажа. Если вам нужен
											базовый монтаж без&nbsp;сложных эффектов и&nbsp;анимации,
											стоимость будет ниже, чем&nbsp;при&nbsp;работе
											с &nbsp;продвинутой графикой и&nbsp;спецэффектами.</p>
										<h2>
											Зачем нужен видеомонтаж?</h2>
										<p>Ⓜ️ Сложность проекта также влияет на&nbsp;цену.
											Если&nbsp;вы
											хотите
											отредактировать короткое видео для&nbsp;социальных сетей,
											например,
											длительностью 1-2&nbsp;минуты, стоимость будет ниже,
											чем&nbsp;при &nbsp;монтаже полнометражного фильма. Срочные
											заказы могут увеличить цену, так&nbsp;как&nbsp;монтажер
											может
											взимать дополнительную плату за&nbsp;приоритетное
											выполнение
											работы.</p>
										<p>Ⓜ️ Географическое местоположение также может влиять
											на&nbsp;стоимость монтажа. В крупных городах
											и&nbsp;развитых
											странах цены выше, чем в&nbsp;менее развитых регионах.
											Уровень монтажной студии также влияет на&nbsp;цену. Если
											вы
											выбираете независимого специалиста, стоимость будет ниже,
											чем при&nbsp;работе с монтажной студией.</p>
										<p>Ⓜ️ Средние цены на монтаж видео могут варьироваться
											от&nbsp;1000 до&nbsp;5000 рублей за минуту видео. Однако,
											эти цифры являются только ориентиром. Цена может быть
											как&nbsp;выше, так&nbsp;и&nbsp;ниже в&nbsp;зависимости
											от&nbsp;вышеперечисленных факторов. Важно провести
											детальную консультацию с монтажником или&nbsp;студией
											для&nbsp;получения точной оценки стоимости вашего
											конкретного
											проекта..</p>
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
SectionVideoRedaction.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};