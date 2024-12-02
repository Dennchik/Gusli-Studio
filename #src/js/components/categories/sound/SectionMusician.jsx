import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionMusician = ({baseUrl}) => {
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
											 src={getPath('img/main/service/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title musician-title'>Сонграйтинг</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-piano  _icon"></i>В&nbsp;студии
										звукозаписи вы&nbsp;можете приобрести готовую песню,
										заказать создание музыки у&nbsp;профессиональных
										композиторов и&nbsp;аранжировщиков. Наши музыканты работают
										в&nbsp;различных жанрах: от&nbsp;популярной эстрады
										до&nbsp;авангарда. Они могут написать слова и&nbsp;создать
										музыкальную композицию в&nbsp;любом стиле,
										от&nbsp;классического до&nbsp;народного и&nbsp;авторского.
									</li>
									<li><i className="icon-piano _icon"></i>Если вам нужна мелодия
										для&nbsp;фильма или&nbsp;рекламы на&nbsp;телевидении, наши
										специалисты создадут еев&nbsp;соответствии
										с&nbsp;требованиями заказчика. Мы также можем написать слова
										и&nbsp;создать музыкальную композицию в&nbsp;радиоформате.
									</li>
									<li><i className="icon-piano _icon"></i>Наши авторы работают
										в&nbsp;разных направлениях: от&nbsp;классического
										до&nbsp;народного и&nbsp;авторского. Мы&nbsp;можем создать
										музыку для&nbsp;любого проекта, будь то&nbsp;фильм, реклама
										или&nbsp;корпоративное мероприятие.
									</li>
								</ul>
							</div>
							{/* <p>Мы предоставляем услуги по музыкальному редактированию с использованием современных инструментов и технологий.</p>
							 <p>Обратившись к нашему специалисту, вы сможете получить максимальный уровень удовлетворенности и качества вашего произведения.</p> */}
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title anthem-title'>Корпоративный
							гимн
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Тарифы на создание гимна</h2>
								<p><i className="icon-hand-pointer _icon"></i>Ниже вы можете
									выбрать необходимый для&nbsp;себя набор услуг и&nbsp;удобный
									тариф. Если ваши запросы выходят за&nbsp;рамки представленных
									тарифов, стоимость и&nbsp;набор услуг всегда можно обсудить
									в&nbsp;диалоге, тарифы очень гибко настраиваются под&nbsp;вашу
									ситуацию.</p>
								<div className="hr-shelf"></div>
								<h3>Минимальный</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Переделка текста на известный мотив</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Кавер (переделка) текста – от 10 000 рублей</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Аранжировка заказчика – 0 рублей</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Помощь с исполнением – 0 рублей, предоставляется
											нестудийная запись варианта исполнения автором в помощь
											заказчику
										</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div>Мелодия заказчика – 0 рублей</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>нет</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>5-7 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div>Вносятся обоснованные правки текста</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>₽ 10 000</div>
									</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Лайт</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Переделка текста и вокал</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Кавер (переделка) текста – от 10 000 рублей</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Аранжировка заказчика – 0 рублей</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Вокал – 15 000 рублей, 1 голос, минимальные эффекты
										</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div>Мелодия заказчика – 0 рублей</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>нет</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>10-20 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div>Вносятся обоснованные правки текста, других правок
											нет
										</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>₽ 25&nbsp;000</div>
									</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Базовый</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Базовый авторский гимн под ключ</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Базовый авторский текст – 10 000 рублей. В стоимость
											входит до 10 четверостиший текста.
										</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Базовая аранжировка – 40&nbsp000 рублей, в основе
											простые инструменты, качество обычное
										</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Вокал – 20&nbsp;000 рублей, 1-2&nbsp;голоса,
											специальные эффекты
										</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div>Базовая мелодия – 10&nbsp;000 рублей</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>Авторское право</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>30-35 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div>Обоснованные правки текста, 1 небольшая правка по
											мелодии или вокалу
										</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>₽ 80&nbsp;000</div>
									</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Оптимальный</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Оптимальный авторский гимн под&nbsp;ключ</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Оптимальный авторский текст – 15&nbsp;000&nbsp;рублей.
											Варианты припева и&nbsp;некоторых частей куплетов
											на&nbsp;выбор.
										</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Оптимальная аранжировка – 60&nbsp000 рублей,
											в&nbsp;основе – качественные инструменты
											из&nbsp;общедоступных источников, формат -
											для&nbsp;больших
											площадок
										</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Вокал – 30&nbsp000 рублей, 2-3&nbsp;голоса, специальные
											эффекты.
										</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div>Оптимальная мелодия – 15&nbsp;000 рублей</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>Авторское право</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>35-40 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div> Правки текста до&nbsp;полной сдачи, 2&nbsp;небольших
											правки по&nbsp;мелодии или вокалу
										</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>₽ 120&nbsp;000</div>
									</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Премиум</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Авторский гимн премиум-качества под&nbsp;ключ.</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Премиальный авторский текст – 25&nbsp;000 рублей.
											Каждый куплет и&nbsp;припев предоставляются в&nbsp;2-3
											вариантах на&nbsp;выбор.
										</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Премиум аранжировка&nbsp;– 80&nbsp;000 рублей,
											в&nbsp;основе – качественные инструменты в&nbsp;живом
											звучании, формат – для&nbsp;больших площадок и
											радиостанций
										</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Вокал – 45&nbsp;000 рублей, 2-4 голоса, специальные
											эффекты.
										</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div> Мелодия Премиум&nbsp;– 25&nbsp;000&nbsp;рублей</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>Авторское право</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>45-50 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div> Правки до&nbsp;полной сдачи</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>₽ 175&nbsp;000</div>
									</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>VIP</h3>
								<ul>
									<li>
										<div>Услуги:</div>
										<div>Гимн с&nbsp;участием звёзд эстрады.</div>
									</li>
									<li>
										<div>Текст:</div>
										<div>Профессиональный авторский текст.</div>
									</li>
									<li>
										<div>Аранжировка:</div>
										<div>Аранжировка от&nbsp;композитора, работающего
											со&nbsp;звездами эстрады, высочайшего качества.
										</div>
									</li>
									<li>
										<div>Вокал:</div>
										<div>Вокал от звёзд эстрады.</div>
									</li>
									<li>
										<div>Мелодия:</div>
										<div>Мелодия от композитора, работающего со звездами
											эстрады.
										</div>
									</li>
									<li>
										<div>Авторское право:</div>
										<div>Авторское право</div>
									</li>
									<li>
										<div>Сроки:</div>
										<div>45-50 дней</div>
									</li>
									<li>
										<div>Правки:</div>
										<div> Правки до&nbsp;полной сдачи</div>
									</li>
									<li>
										<div><span>ВСЕГО:</span></div>
										<div>По договоренности</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_17.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_17.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Как выбрать тариф на создание гимна</h2>
								<p><i className="icon-hand-pointer _icon"></i>Выше приведены
									шесть вариантов создания гимна. Выбрать подходящий
									и&nbsp;понять, сколько он&nbsp;будет стоить, иногда непросто.
									Вы всегда можете связаться с нами и получить консультацию по
									всем вопросам.</p>
								<p><i className="icon-hand-pointer _icon"></i>Стоимость гимна
									зависит от&nbsp;многих факторов, таких как&nbsp;цели, которые
									вы ставите перед нами при&nbsp;создании, площадка,
									на&nbsp;которой он&nbsp;будет звучать, количество вокалистов,
									необходимых для&nbsp;исполнения, стандартный ли&nbsp;это голос
									или&nbsp;необходима схожесть вокала с кем-то
									из&nbsp;знаменитостей, возможно, вы захотите, чтобы&nbsp;ваш
									гимн исполнила звезда нашей эстрады. Все эти факторы влияют на
									стоимость. Если у вас в компании выделен определенный бюджет
									на&nbsp;эти цели, который нельзя превышать, все услуги могут
									быть подобраны с&nbsp;учетом этого бюджета.</p>
								<p><i className="icon-hand-pointer _icon"></i>Значительно влияет
									на&nbsp;тариф необходимое качество аранжировки и&nbsp;вокала -
									для&nbsp;разового корпоратива требуется одно качество,
									а&nbsp;если гимн предполагается транслировать на&nbsp;крупных
									площадках, радио и&nbsp;телевидении, требуется совершенно
									другое качество звучания.</p>
								<p><i className="icon-hand-pointer _icon"></i>Иногда необходимо
									записывать вживую большое количество инструментов и&nbsp;целый
									хор вокалистов в&nbsp;крупной звукозаписывающей студии,
									приспособленной для&nbsp;этого, конечно же, все&nbsp;это
									отразится на&nbsp;качестве и&nbsp;стоимости.</p>
								<p><i className="icon-hand-pointer _icon"></i>Если вы создаете
									целостный аудиобренд компании и&nbsp;вам, кроме гимна,
									необходимо создать джингл, аудиологотип, фоновую музыку
									и&nbsp;другие элементы, стоимость создания единого
									музыкального бренда и&nbsp;всех необходимых композиций
									оговаривается дополнительно и&nbsp;не&nbsp;входит
									в&nbsp;стоимость гимна.</p>
							</div>
							<div className="service-description__row">
								<h2>Каким должен быть гимн компании</h2>
								<p><i className="icon-hand-pointer _icon"></i>Гимн является
									важной частью имиджа и&nbsp;бренда компании. Он&nbsp;должен
									соответствовать общему духу компании, учитывать
									ее&nbsp;возраст на&nbsp;рынке, успехи и&nbsp;достижения, долю
									рынка и&nbsp;количество сотрудников. При&nbsp;создании гимна
									необходимо учитывать множество факторов, таких
									как&nbsp;возраст компании, ее&nbsp;достижения и успехи,
									а&nbsp;также географию ее&nbsp;деятельности.</p>
								<p><i className="icon-hand-pointer _icon"></i>Компания часто
									использует гимн не&nbsp;только внутри коллектива
									на&nbsp;мероприятиях, но&nbsp;и&nbsp;транслирует его
									в&nbsp;публичное пространство, на&nbsp;клиентов
									и&nbsp;партнеров. Для этого к&nbsp;гимну могут прилагаться
									различные элементы аудиобрендинга, такие&nbsp;как музыкальная
									визитка, фоновая музыка, джингл, рингтон, музыкальный логотип
									и&nbsp;другие элементы. Важно, чтобы все эти элементы были
									связаны единой мелодией и&nbsp;стилистикой, чтобы создать
									музыкальную идентичность компании и&nbsp;повысить узнаваемость
									бренда.</p>
								<p><i className="icon-hand-pointer _icon"></i>Грамотный подход
									к&nbsp;разработке гимна и&nbsp;других элементов музыкального
									бренда компании позволит компании выделиться среди конкурентов
									и&nbsp;создать прочные ассоциативные связи у&nbsp;потребителя
									с&nbsp;вашей продукцией или услугами.</p>
							</div>
							<div className="service-description__row">
								<h2>Можно ли&nbsp;использовать кавер песни для&nbsp;гимна</h2>
								<p><i className="icon-hand-pointer _icon"></i>Кавер-версия песни
									– это&nbsp;фактически новая интерпретация уже&nbsp;известной
									композиции. От&nbsp;оригинала в&nbsp;такой версии часто
									остается только музыка (минус и аранжировка), а&nbsp;слова
									и&nbsp;исполнение могут быть совершенно другими.</p>
								<p><i className="icon-hand-pointer _icon"></i>Такой вариант
									может существовать, но&nbsp;стоит учитывать,
									что&nbsp;эта&nbsp;мелодия может быть использована
									и&nbsp;другими компаниями. Для&nbsp;одного корпоратива такой
									вариант, возможно, подойдет, но&nbsp;использовать кавер
									в&nbsp;качестве постоянного гимна не стоит.</p>
								<p><i className="icon-hand-pointer _icon"></i>Также нужно
									помнить о&nbsp;возможных сложностях с&nbsp;авторскими правами.
									Дело в&nbsp;том, что&nbsp;у&nbsp;текста песни, музыки
									и&nbsp;аранжировки могут быть свои правообладатели. Даже
									для&nbsp;простого воспроизведения песни на&nbsp;мероприятии
									требуется оплатить сбор в&nbsp;Российское авторское общество
									(РАО). А&nbsp;для переделки текста песни по&nbsp;нашему
									законодательству нужно получить письменное разрешение автора
									или&nbsp;правообладателя песни, что&nbsp;может быть довольно
									непросто.</p>
								<p><i className="icon-hand-pointer _icon"></i>Чтобы избежать
									всех этих сложностей, лучше заказать для&nbsp;своей компании
									уникальную песню&nbsp;– текст и&nbsp;музыку
									с&nbsp;аранжировкой, а&nbsp;также оформить авторские права
									на&nbsp;свою организацию. Такие документы
									мы&nbsp;предоставляем заказчику при&nbsp;необходимости
									и&nbsp;пересылаем в&nbsp;любую точку мира. Так вы будете
									уверены, что&nbsp;при воспроизведении гимна на&nbsp;любой
									площадке к&nbsp;вам не&nbsp;будет вопросов от&nbsp;РАО
									и&nbsp;других обществ, защищающих авторские права.</p>
							</div>
							<div className="service-description__row">
								<h2>Как исполнить гимн компании</h2>
								<p><i className="icon-hand-pointer _icon"></i>Допустим, текст
									гимна написан, аранжировка готова, и&nbsp;теперь дело
									за&nbsp;его исполнением. При&nbsp;решении этой задачи есть
									несколько вариантов.</p>
								<p><i className="icon-hand-pointer _icon"></i>Первый
									вариант&nbsp;- каждый раз исполнять гимн самостоятельно
									под&nbsp;аранжировку. Для&nbsp;этого можно задействовать весь
									коллектив, который присутствует в&nbsp;данный момент,
									или&nbsp;выбрать небольшую группу сотрудников с&nbsp;хорошими
									вокальными данными. Также возможен вариант, когда несколько
									сотрудников исполняют гимн с&nbsp;помощью микрофонов, задавая
									общий тон, а&nbsp;остальные подпевают им. Этот вариант
									не&nbsp;требует больших материальных затрат, сотрудникам
									просто нужно выучить текст гимна.</p>
								<p><i className="icon-hand-pointer _icon"></i>Текст гимна также
									может транслироваться на&nbsp;экране всем в&nbsp;помощь. Можно
									подготовить видео по&nbsp;типу караоке, с&nbsp;выплывающими
									словами, чтобы помочь сотрудникам.</p>
								<p><i className="icon-hand-pointer _icon"></i>Второй вариант -
									отобрать часть ваших коллег с хорошими вокальными данными
									и&nbsp;сделать студийную запись исполнения гимна. Затем
									на&nbsp;мероприятиях вы&nbsp;сможете включать эту&nbsp;запись
									и&nbsp;подпевать&nbsp;ей. В&nbsp;этом случае у&nbsp;вас
									возникнут затраты на&nbsp;аренду студии, коррекцию голосов
									или&nbsp;голоса, сведение и&nbsp;монтаж вашей песни.</p>
								<p><i className="icon-hand-pointer _icon"></i>Третий вариант -
									доверить исполнение гимна профессионалам. В&nbsp;этом случае
									вы определяете, какие голоса вам нужны&nbsp;- мужские,
									женские, детские или&nbsp;смешанный состав. Затем вам
									предоставляются на&nbsp;выбор голоса вокалистов, производится
									студийная запись и&nbsp;сведение вашей песни. Этот вариант
									наиболее затратный по&nbsp;стоимости и&nbsp;самый качественный
									по&nbsp;результату.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionMusician.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};