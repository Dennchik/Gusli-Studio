import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSongWriting = ({baseUrl}) => {
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
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<div className="service-description__title musician-title">
							Сонграйтинг
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<ul>
									<li><i className="icon-piano _icon"></i>В&nbsp;студии
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
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Цены на&nbsp;создание песни (песни на&nbsp;заказ, авторские
									проекты, корпоративные гимны) : </h2>
								<h3>Пакет 1 - 100 000₽</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Написание текста;</li>
									<li><i className="icon-check _icon"></i>Написание мелодии;
									</li>
									<li><i className="icon-check _icon"></i>Авторская аранжировка
										(до 40
										дорожек);
									</li>
									<li><i className="icon-check _icon"></i>Звукозапись;</li>
									<li><i className="icon-check _icon"></i>Мастеринг и сведение;
									</li>
									<li><i className="icon-check _icon"></i>Передача авторских
										прав;
									</li>
									<li><i className="icon-check _icon"></i>До 3 правок.</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Пакет 2 - 125 000₽</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Написание текста;</li>
									<li><i className="icon-check _icon"></i>Написание мелодии;
									</li>
									<li><i className="icon-check _icon"></i>
										Авторская аранжировка (до&nbsp;60&nbsp;дорожек);
									</li>
									<li><i className="icon-check _icon"></i>Бек вокалисты;</li>
									<li><i className="icon-check _icon"></i>Звукозапись;</li>
									<li><i className="icon-check _icon"></i>Сведение и мастеринг;
									</li>
									<li><i className="icon-check _icon"></i>Дизайн обложки;</li>
									<li><i className="icon-check _icon"></i>
										Дистрибуция на цифровые площадки;
									</li>
									<li><i className="icon-check _icon"></i>
										Передача авторских прав;
									</li>
									<li><i className="icon-check _icon"></i>До 5 правок.</li>
								</ul>
								<div className="hr-shelf"></div>
								<h3>Пакет 3 - от 200 000₽</h3>
								<ul>
									<li><i className="icon-check _icon"></i>Написание текста;</li>
									<li><i className="icon-check _icon"></i>Написание мелодии;
									</li>
									<li><i className="icon-check _icon"></i>
										Авторская аранжировка (до&nbsp;100&nbsp;дорожек) живые
										инструменты;
									</li>
									<li><i className="icon-check _icon"></i>Сессионные музыканты;
									</li>
									<li><i className="icon-check _icon"></i>Бек вокалисты;</li>
									<li><i className="icon-check _icon"></i>Звукозапись;</li>
									<li><i className="icon-check _icon"></i>
										Сведение и мастеринг;
									</li>
									<li><i className="icon-check _icon"></i>
										Дизайн обложки;
									</li>
									<li><i className="icon-check _icon"></i>
										Дистрибуция на цифровые площадки;
									</li>
									<li><i className="icon-check _icon"></i>
										Съемка видео Reels для&nbsp;презентация релиза;
									</li>
									<li><i className="icon-check _icon"></i>
										Передача авторских прав;
									</li>
									<li><i className="icon-check _icon"></i>
										Правки без ограничений.
									</li>
								</ul>
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
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_17.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_17.png')}
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
SectionSongWriting.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};