import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { Link } from 'react-scroll';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionMastering = ({baseUrl}) => {
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
											 src={getPath('img/parallax/sound/fotoram_bg_10.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_10.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Сведение и&nbsp;мастеринг
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h2>Сведение включает в&nbsp;себя:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>полное сведение дорожек вашего голоса и&nbsp;бита;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>тональную коррекцию голоса (auto-tune);</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>частотную, динамическую и&nbsp;пространственную
												обработку;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>ритмическую коррекцию;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>дикторы для&nbsp;аудиокниг;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>работу с&nbsp;инструменталом;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>саунд-дизайн проекта, создание различных эффектов
												на&nbsp;голосе.</p>
										</li>
									</ul>
									<h3>Цены:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											сведение&nbsp;-<span>&nbsp;4990&nbsp;рублей</span>.
										</li>
										<li><i className="icon-check _icon"></i>
											за&nbsp;каждую дорожку свыше
											15&nbsp;штук&nbsp;-&ensp;<span>490&nbsp;рублей</span>;
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h2>Мастеринг включает в себя:</h2>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>лимитирование и&nbsp;компрессия финального
												материала;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>эквализация, улучшение стерео;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>приведение всего релизу к&nbsp;одному звучанию.</p>
										</li>
									</ul>
									<h3>Цены:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>мастеринг&nbsp;- <span>2&nbsp;490&nbsp;руб</span>.</p>
										</li>
									</ul>
									<ul>
										<h3>Сроки выполнения:</h3>
										<li><i className="icon-check _icon"></i>
											<p>до 5 дней;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>24&nbsp;часа
												(х2&nbsp;от&nbsp;стоимости&nbsp;услуги).</p>
										</li>
									</ul>
									<ul>
										<h3>Дополнительные услуги:</h3>
										<li><i className="icon-check _icon"></i>
											<p>сведение &quot;Online&quot;
												по&nbsp;видеосвязи&nbsp;- <span>4990 рублей</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>мастеринг&nbsp;- <span>2490&nbsp;рублей</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>чистка и&nbsp;подготовка
												проекта&nbsp;- <span>990&nbsp;рублей</span>.</p>
										</li>
									</ul>
								</div>
							</div>
							<p className="service-description__ps">
								Если у&nbsp;вас есть какие-либо вопросы или&nbsp;вы&nbsp;хотите
								заказать наши услуги, пожалуйста, нажмите
								кнопку <Link className="service-description__link"
														 to="offer-container"
														 duration={500}
														 offset={-100}
														 isDynamic={true}
														 smooth='easeInQuad'>
								&quot;Оставить заявку&quot;</Link>
								или&nbsp;свяжитесь с&nbsp;нами в&nbsp;ЛС&nbsp;сообщества.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><span>Профессиональное сведение музыки</span>&nbsp;-
										это&nbsp;один из&nbsp;ключевых этапов создания вашей
										композиции. Именно на&nbsp;этом этапе мы&nbsp;определяем
										характер звучания музыки и&nbsp;ее &quot;внешний
										вид&quot;.Когда вы&nbsp;написали песню, подобрали к&nbsp;ней
										аранжировку и&nbsp;записали все&nbsp;дорожки вокала, песня
										еще не&nbsp;готова. Наступает момент сведения. Сведение
										музыки&nbsp;- это&nbsp;сложный процесс, который включает
										в&nbsp;себя коррекцию неточностей, допущенных
										при&nbsp;записи, подбор необходимых сэмплов (звуковых
										фрагментов), частотную и&nbsp;динамическую обработку всех
										дорожек, а&nbsp;также пространственную обработку.</p>
									<p><span>Цель сведения&nbsp;</span>- сделать так,
										чтобы&nbsp;все&nbsp;дорожки зазвучали как&nbsp;единое целое,
										придав звучанию песни нужный характер. Если&nbsp;вы хотите
										заказать сведение музыки, сделайте это&nbsp;в&nbsp;нашей
										студии! Хотя сведение музыки&nbsp;- это&nbsp;технически
										сложный процесс, он&nbsp;также является творческим. Один
										и&nbsp;тот&nbsp;же проект по&nbsp;характеру звучания может
										быть как &quot;попсовым&quot;,
										так&nbsp;и&nbsp;более &quot;электронным&quot;
										или&nbsp;&quot;хип-хоповым&quot;. В&nbsp;этом плане сведение
										дает вам творческий простор.
									</p>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><span>Сведение </span>- это&nbsp;основной этап работы
										над&nbsp;композицией, и&nbsp;не&nbsp;стоит
										им&nbsp;пренебрегать. Мы занимаемся сведением композиций
										любой сложности и&nbsp;в&nbsp;любом стиле. Мы работаем
										как&nbsp;с&nbsp;проектами, записанными в&nbsp;нашей
										студии, так&nbsp;и&nbsp;с любыми другими вашими проектами.
									</p>
									<p><i className="icon-musical-notes _icon"></i>
										Комфортная и расслабляющая атмосфера в&nbsp;нашей студии
										позволит вам полностью погрузиться в&nbsp;творческий
										процесс и&nbsp;получить именно тот&nbsp;результат, который
										вам нужен.Объемное звучание записи включает в&nbsp;себя
										такие&nbsp;типы работ, как&nbsp;создание объема
										от&nbsp;помещения, в&nbsp;котором находятся музыкальные
										инструменты и&nbsp;звуковые источники, пространственные
										отражения, разборчивость каждого музыкального элемента
										и&nbsp;чистота музыкальных инструментов. Каждый инструмент
										должен звучать чисто и&nbsp;естественно
										и&nbsp;не&nbsp;должен смешиваться с&nbsp;другими.
										Это&nbsp;один из&nbsp;основных факторов качества сведения
										музыки.</p>
									<p><i className="icon-musical-notes _icon"></i>
										Также важно создать музыкальное равновесие между
										инструментами и&nbsp;создать тембральную окраску всего
										проекта. Кроме&nbsp;того, собственное звуковое
										индивидуальное звучание каждого инструмента должно
										подчеркиваться. Инструменты должны не&nbsp;только
										находиться
										в&nbsp;балансе по&nbsp;частотам, но&nbsp;и&nbsp;быть
										грамотно расставлены по&nbsp;панораме. Нелинейные
										искажения,
										резонансы и&nbsp;помехи должны отсутствовать (конечно,
										если&nbsp;это не&nbsp;является идеей вашего проекта).
										Звукорежиссер при&nbsp;сведении музыки должен обязательно
										исправить интонационные ошибки исполнителя, выровнять темп
										и&nbsp;ритмичность, создать полную слаженность
										и&nbsp;единство музыкальных инструментов, а&nbsp;также
										выправить вокал (тюнинг вокала).</p>
									<p><i className="icon-musical-notes _icon"></i>
										Сведение музыки при&nbsp;высоком уровне громкости может
										негативно повлиять на&nbsp;ваше восприятие. Поэтому важно
										сохранять невысокий уровень звука. В&nbsp;этом случае ваше
										восприятие будет более реалистичным, и&nbsp;качество
										сведения значительно вырастет. Самый лучший вариант&nbsp;-
										периодически менять уровень громкости. Многие
										звукорежиссеры
										для&nbsp;дополнительного мониторинга предпочитают сводить
										в&nbsp;режиме MONO или&nbsp;проверять качество сведения
										в&nbsp;наушниках или&nbsp;на&nbsp;бытовой акустике,
										или&nbsp;в&nbsp;машине. Дополнительный финальный контроль
										на&nbsp;этих источниках, несомненно, заставит посмотреть
										на&nbsp;вашу работу под&nbsp;новым углом. Однако сведение
										исключительно в&nbsp;mono или в&nbsp;наушниках
										категорически запрещается. Эти источники склонны изменять
										ряд частот, а&nbsp;следовательно, итог вашей работы будет
										не&nbsp;очень качественным.</p>
								</div>
								<div className="service-description__row-col">
									<p><span>Мастеринг </span>– это&nbsp;процесс, который
										необходим для&nbsp;улучшения качества звука ваших песен.
										Вы&nbsp;написали трек и &nbsp;свели его, но&nbsp;чего-то
										не&bvsp;хватает? Думаю, многие сталкивались с&nbsp;тем,
										что&nbsp;на&nbsp;разных аудиосистемах звуковая картина может
										кардинально отличаться, и&nbsp;на&nbsp;одной акустической
										системе слышно то, что&nbsp;не слышно на&nbsp;другой.
									</p>
									<p><i className="icon-head-phones _icon"></i>
										В отличие от&nbsp;сведения мультитрека, которое является
										творческим процессом, мастеринг трека – это&nbsp;скорее
										технический процесс, хотя определенная доля творчества
										в&nbsp;нем тоже&nbsp;присутствует. Это&nbsp;своеобразная
										звуковая &quot;лупа&quot;, которая детально изучает каждую
										миллисекунду микса и готовит песню к&nbsp;публикации
										или&nbsp;изданию. Вопреки распространенному заблуждению,
										мастеринг не&nbsp;может спасти плохое сведение.
										Он&nbsp;не&nbsp;сделает звучание микса совершенно другим.
										Некоторые небольшие ошибки и&nbsp;частотные провалы могут
										быть исправлены и&nbsp;сглажены мастерингом, но&nbsp;это
										не&nbsp;является его основной задачей.</p>
									<p><i className="icon-head-phones _icon"></i>
										Во время мастеринга важно, чтобы&nbsp;звукорежиссер
										(а&nbsp;точнее, мастеринг-инженер) посмотрел на&nbsp;микс
										свежим взглядом.
										Ведь в&nbsp;процессе работы над &nbsp;ведением, фонограмма
										может стать настолько привычной для&nbsp;звукорежиссера,
										что&nbsp;он не&nbsp;сможет в&nbsp;полной мере оценить
										достоинства и&nbsp;недостатки сведения. Поэтому
										рекомендуется,
										чтобы&nbsp;сведение и&nbsp;мастеринг проводили разные
										люди (но, конечно, из&nbsp;любого правила есть
										исключения).
										Слух мастеринг-инженера должен по-своему воспринимать
										фонограмму&nbsp;– сразу слышать достоинства
										и&nbsp;недостатки
										общего частотного и&nbsp;динамического баланса.</p>
									<p><i className="icon-head-phones _icon"></i>
										Акустически наша контрольная комната для&nbsp;мастеринга
										подходит лучше всего. Это&nbsp;подтверждается измерениями,
										которые&nbsp;проводились независимыми специалистами. Более
										того, нашу студию регулярно арендуют разные звукорежиссеры
										для&nbsp;сведения и&nbsp;мастеринга своих треков,
										и&nbsp;именно потому, что&nbsp;звучание нашей контрольной
										комнаты идеально подходит для&nbsp;промежуточной
										и&nbsp;финальной обработки треков.</p>
									<p><i className="icon-musical-notes _icon"></i>
										Самый лучший вариант - обратиться к&nbsp;профессионалам.
										Это выйдет дешевле, быстрее и&nbsp;эффективнее. Заказать
										сведение музыки можно у&nbsp;нас недорого.</p>
								</div>
							</div>
							<div className="service-description__ps">
								Итак, вы можете снять студию звукозаписи, где&nbsp;мастеринг
								ваших музыкальных треков будет проведен профессионально,
								качественно и&nbsp;по&nbsp;обоснованным ценам!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionMastering.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};