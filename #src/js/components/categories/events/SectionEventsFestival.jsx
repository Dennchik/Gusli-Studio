import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionEventsFestival = ({baseUrl}) => {
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
									<img className="parallax__image-services"
											 src={getPath('img/parallax/events/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/events/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title events-festival-title">
							Детские праздники
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<p><i className="icon-hand-pointer _icon"></i>
									Добро пожаловать в&nbsp;мир веселья и&nbsp;радости! Мы
									предлагаем вам уникальную программу для&nbsp;аниматоров
									праздников, которая поможет вам создать незабываемую атмосферу
									на&nbsp;любом мероприятии. С&nbsp;нашими профессиональными
									инструментами вы сможете легко организовать и&nbsp;провести
									увлекательные игры, конкурсы, шоу-программы
									и&nbsp;мастер-классы, которые сделают ваш праздник
									еще&nbsp;более ярким и&nbsp;запоминающимся.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Наша программа предлагает широкий выбор тематических
									сценариев, персонажей и&nbsp;активностей, чтобы&nbsp;каждый
									момент праздника был&nbsp;особенным. Вы сможете легко
									настроить программу под&nbsp;конкретные потребности
									и&nbsp;пожелания вашей аудитории, чтобы &nbsp;каждый гость
									почувствовал себя особенным и&nbsp;уникальным.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Доверьтесь нам и&nbsp;позвольте профессионалам сделать
									каждое ваше мероприятие особенным и&nbsp;уникальным. Мы
									гарантируем, что&nbsp;с&nbsp;нашей помощью каждый момент
									праздника станет незабываемым и&nbsp;оставит яркие
									воспоминания для&nbsp;вас и&nbsp;ваших гостей.
								</p>
								<h2>Предлагаемые программы:</h2>
								<h3>Гигантские мыльные пузыри</h3>
								<p><i className="icon-hand-pointer _icon"></i>
									Наши пузыри отличаются тем, что&nbsp;мы не&nbsp;только
									показываем их, но и&nbsp;предлагаем всем желающим создать
									самый большой мыльный пузырь самостоятельно. Не&nbsp;только
									дети, но&nbsp;и&nbsp;взрослые получают огромное удовольствие!
								</p>
								<h3>Аквагрим</h3>
								<p><i className="icon-hand-pointer _icon"></i>
									Все желающие смогут перевоплотиться в&nbsp;любимого персонажа
									или&nbsp;весёлую зверюшку. :)
								</p>
								<h3>Твистинг. Фигурки из шариков</h3>
								<p><i className="icon-hand-pointer _icon"></i>
									Детям очень нравятся воздушные шарики, а&nbsp;когда их много,
									то&nbsp;это ещё лучше! Маленькие и&nbsp;большие фигуры,
									головные уборы, множество игр и&nbsp;конкурсов
									с&nbsp;шариками&nbsp;- все это&nbsp;вызывает восторг
									у&nbsp;детей.</p>
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
								<h3>Один аниматор - от&nbsp;5000&nbsp;руб./час</h3>
								<ul>
									<li><i className="icon-check _icon"></i>
										Отличный вариант для&nbsp;праздника до&nbsp;10 детей;
									</li>
									<li><i className="icon-check _icon"></i>
										Любой персонаж на&nbsp;выбор;
									</li>
									<li><i className="icon-check _icon"></i>
										Музыкальное сопровождение;
									</li>
									<li><i className="icon-check _icon"></i>
										Интересный игровой сценарий;
									</li>
									<li><i className="icon-check _icon"></i>
										Весёлые игры и&nbsp;конкурсы.
									</li>
								</ul>
								<h3>Два аниматора&nbsp;- от&nbsp;7500&nbsp;руб./час</h3>
								<ul>
									<li><i className="icon-check _icon"></i>
										Лучший вариант для&nbsp;любого праздника;
									</li>
									<li><i className="icon-check _icon"></i>
										Любые персонажи на&nbsp;выбор;
									</li>
									<li><i className="icon-check _icon"></i>
										Музыкальное сопровождение;
									</li>
									<li><i className="icon-check _icon"></i>
										Интересный игровой сценарий;
									</li>
									<li><i className="icon-check _icon"></i>
										Весёлые игры и&nbsp;конкурсы.
									</li>
								</ul>
								<p className="service-description__ps">При заказе двух
									аниматоров на&nbsp;1,5&nbsp;часа и&nbsp;дольше дополнительная
									услуга в &nbsp;ПОДАРОК!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column-parallax">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services"
											 src={getPath('img/parallax/events/fotoram_bg_02.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/events/fotoram_bg_02.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<h3><i className="icon-snow _icon"></i>
									Дед Мороз и Снегурочка
								</h3>
								<p><i className="icon-hand-pointer _icon"></i>
									Любимые новогодние персонажи детей и&nbsp;взрослых знают,
									как&nbsp;встретить Новый год, чтобы он&nbsp;принёс радость
									и&nbsp;счастье.
								</p>
								<h3>Выпускной в школе. Утренник в детском саду.</h3>
								<p><i className="icon-hand-pointer _icon"></i>
									Отмечать важные события и&nbsp;проводить время в&nbsp;компании
									своих
									одноклассников – это здорово! Мы организуем праздники
									для &nbsp;классов в&nbsp;школах, кафе и&nbsp;на&nbsp;природе.
									А&nbsp;также проводим мероприятия в&nbsp;детских садах.
									Стоимость зависит от&nbsp;многих факторов, таких
									как&nbsp;количество детей, место проведения праздника
									и&nbsp;дополнительные услуги. В&nbsp;процессе консультации мы
									расскажем вам все&nbsp;подробности и&nbsp;предложим
									оптимальный вариант.
								</p>
								<h3>Дополнительные услуги:</h3>
								<ul>
									<li><i className="icon-check _icon"></i>
										Видеооператор
									</li>
									<li><i className="icon-check _icon"></i>
										Диджей + световик.
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
SectionEventsFestival.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};