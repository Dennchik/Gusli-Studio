import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
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
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Сведение включает в&nbsp;себя:</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												Полное сведение дорожек вашего голоса и&nbsp;бита;
											</li>
											<li><i className="icon-check _icon"></i>Тональную
												коррекцию голоса (auto-tune);
											</li>
											<li><i className="icon-check _icon"></i>
												Частотную, динамическую и&nbsp;пространственную
												обработку;
											</li>
											<li><i className="icon-check _icon"></i>
												Ритмическую коррекцию;
											</li>
											<li><i className="icon-check _icon"></i>
												Дикторы для&nbsp;аудиокниг;
											</li>
											<li><i className="icon-check _icon"></i>
												Работу с&nbsp;инструменталом;
											</li>
											<li><i className="icon-check _icon"></i>
												Саунд-дизайн проекта, создание различных эффектов
												на&nbsp;голосе.
											</li>
										</ul>
										<h3>Цены:</h3>
										<ul>
											<li><i className="icon-check _icon"></i>
												Сведение&nbsp;-<span>&nbsp;4990&nbsp;рублей</span>.
											</li>
											<li><i className="icon-check _icon"></i>
												<span>490&nbsp;рублей</span>&nbsp;за&nbsp;каждую дорожку
												свыше 15&nbsp;штук.
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<h2>Мастеринг включает в себя:</h2>
										<ul>
											<li><i className="icon-check _icon"></i>
												Лимитирование и&nbsp;компрессия финального материала;
											</li>
											<li><i className="icon-check _icon"></i>
												Эквализация, улучшение стерео;
											</li>
											<li><i className="icon-check _icon"></i>
												Приведение всего релизу к&nbsp;одному звучанию.
											</li>
											<h3>Цены:</h3>
											<li><i className="icon-check _icon"></i>
												Мастеринг&nbsp;- <span>2&nbsp;490&nbsp;руб</span>.
											</li>
											<h3>Сроки выполнения:</h3>
											<li><i className="icon-check _icon"></i>до 5 дней;</li>
											<li><i className="icon-check _icon"></i>
												24&nbsp;часа (х2&nbsp;от&nbsp;стоимости&nbsp;услуги).
											</li>
											<p className="service-description__ps">
												Если у&nbsp;вас есть какие-либо вопросы или&nbsp;вы
												хотите заказать наши услуги, пожалуйста, нажмите
												кнопку <span>&quot;Оставить заявку&quot;</span> или&nbsp;свяжитесь
												с&nbsp;нами в&nbsp;ЛС сообщества.</p>
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
										<p><span>Профессиональное сведение музыки</span> - это один
											из&nbsp;ключевых этапов создания вашей композиции. Именно
											на&nbsp;этом этапе мы определяем характер звучания музыки
											и&nbsp;ее &quot;внешний вид&quot;.Когда вы&nbsp;написали
											песню, подобрали к&nbsp;ней аранжировку и&nbsp;записали
											все дорожки вокала, песня еще не&nbsp;готова. Наступает
											момент сведения. Сведение музыки&nbsp;- это сложный
											процесс, который включает в&nbsp;себя коррекцию
											неточностей, допущенных при&nbsp;записи, подбор
											необходимых сэмплов (звуковых фрагментов), частотную
											и&nbsp;динамическую обработку всех дорожек, а&nbsp;также
											пространственную обработку.</p>
										<p><span>Цель сведения&nbsp;</span>- сделать так, чтобы
											все&nbsp;дорожки зазвучали как&nbsp;единое целое, придав
											звучанию песни нужный характер. Если&nbsp;вы хотите
											заказать сведение музыки, сделайте это&nbsp;в&nbsp;нашей
											студии! Хотя сведение музыки&nbsp;- это&nbsp;технически
											сложный процесс, он&nbsp;также является творческим. Один
											и&nbsp;тот&nbsp;же проект по&nbsp;характеру звучания может
											быть как &quot;попсовым&quot;,
											так&nbsp;и&nbsp;более &quot;электронным&quot; или&nbsp;&quot;хип-хоповым&quot;.
											В&nbsp;этом плане сведение дает вам творческий простор.
										</p>
										<p><span>Сведение </span>- это&nbsp;основной этап работы
											над&nbsp;композицией, и&nbsp;не&nbsp;стоит
											им&nbsp;пренебрегать. Мы занимаемся сведением композиций
											любой
											сложности и&nbsp;в&nbsp;любом стиле. Мы работаем
											как&nbsp;с&nbsp;проектами, записанными в&nbsp;нашей
											студии,
											так&nbsp;и&nbsp;с любыми другими вашими проектами.</p>
										<p><i className="icon-musical-notes _icon"></i>
											Комфортная и расслабляющая атмосфера в&nbsp;нашей студии
											позволит вам полностью погрузиться в&nbsp;творческий
											процесс
											и&nbsp;получить именно тот&nbsp;результат, который вам
											нужен.Объемное звучание записи включает в&nbsp;себя такие
											типы
											работ, как&nbsp;создание объема от&nbsp;помещения,
											в&nbsp;котором находятся музыкальные инструменты
											и&nbsp;звуковые источники, пространственные отражения,
											разборчивость каждого музыкального элемента и&nbsp;чистота
											музыкальных инструментов. Каждый инструмент должен звучать
											чисто и&nbsp;естественно и&nbsp;не&nbsp;должен смешиваться
											с&nbsp;другими. Это один из&nbsp;основных факторов
											качества
											сведения музыки.</p>
										<p><i className="icon-musical-notes _icon"></i>
											Также важно создать музыкальное равновесие между
											инструментами и&nbsp;создать тембральную окраску всего
											проекта. Кроме&nbsp;того, собственное звуковое
											индивидуальное
											звучание каждого инструмента должно подчеркиваться.
											Инструменты должны не&nbsp;только находиться
											в&nbsp;балансе
											по&nbsp;частотам, но&nbsp;и&nbsp;быть грамотно расставлены
											по&nbsp;панораме. Нелинейные искажения, резонансы
											и&nbsp;помехи должны отсутствовать (конечно, если
											это&nbsp;не&nbsp;является идеей вашего проекта).
											Звукорежиссер
											при&nbsp;сведении музыки должен обязательно исправить
											интонационные ошибки исполнителя, выровнять темп
											и&nbsp;ритмичность, создать полную слаженность
											и&nbsp;единство
											музыкальных инструментов, а&nbsp;также выправить вокал
											(тюнинг
											вокала).</p>
										<p><i className="icon-musical-notes _icon"></i>
											Сведение музыки при&nbsp;высоком уровне громкости может
											негативно повлиять на&nbsp;ваше восприятие. Поэтому важно
											сохранять невысокий уровень звука. В&nbsp;этом случае ваше
											восприятие будет более реалистичным, и&nbsp;качество
											сведения
											значительно вырастет. Самый лучший вариант&nbsp;-
											периодически
											менять уровень громкости. Многие звукорежиссеры
											для&nbsp;дополнительного мониторинга предпочитают сводить
											в&nbsp;режиме MONO или&nbsp;проверять качество сведения
											в&nbsp;наушниках или&nbsp;на&nbsp;бытовой акустике,
											или&nbsp;в&nbsp;машине. Дополнительный финальный контроль
											на&nbsp;этих источниках, несомненно, заставит посмотреть
											на&nbsp;вашу работу под&nbsp;новым углом. Однако сведение
											исключительно в&nbsp;mono или в&nbsp;наушниках
											категорически
											запрещается. Эти источники склонны изменять ряд частот,
											а&nbsp;следовательно, итог вашей работы будет
											не&nbsp;очень
											качественным.</p>
										<p><i className="icon-musical-notes _icon"></i>
											Самый лучший вариант - обратиться к&nbsp;профессионалам.
											Это выйдет дешевле, быстрее и&nbsp;эффективнее. Заказать
											сведение музыки можно у&nbsp;нас недорого.</p>
									</div>
								</div>
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
											 src={getPath('img/parallax/sound/fotoram_bg_10a.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_10a.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
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
										<div className="service-description__ps">Итак, вы можете
											снять
											студию звукозаписи, где&nbsp;мастеринг ваших музыкальных
											треков будет проведен профессионально, качественно
											и&nbsp;по&nbsp;обоснованным ценам!
										</div>
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
SectionMastering.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};