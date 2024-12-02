import PropTypes from 'prop-types';
import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';


//* ----------------------------------------------------------------------------
export const SectionDistribution = ({baseUrl}) => {


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
											 src={getPath('img/main/service/fotoram_bg_19.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_19.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title distribution-title'>Дистрибуция</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Что от Вас нужно:</h2>
								<p><i className="icon-hand-pointer _icon"></i>Прежде всего,
									необходимо подготовить материал, который будет соответствовать
									требованиям качества для&nbsp;радио и&nbsp;музыкальных
									площадок. Это&nbsp;может быть сведённый и&nbsp;отмастеринговый
									материал.</p>
								<p><i className="icon-hand-pointer _icon"></i>Загрузите файлы
									вашего проекта на&nbsp;Яндекс или&nbsp;Google диск
									и&nbsp;предоставьте ссылку с&nbsp;открытым доступом
									к&nbsp;заказу.</p>
								<p><i className="icon-hand-pointer _icon"></i>Внесите информацию
									о&nbsp;релизе в&nbsp;форму и укажите дату его выхода
									на&nbsp;площадки.</p>
								<p><i className="icon-hand-pointer _icon"></i>Ожидайте появления
									вашего релиза на&nbsp;всех официальных площадках страны
									и&nbsp;мира в&nbsp;назначенный день.</p>
								<h2>Стоимость услуг:</h2>
								<p>Выгрузка трека на&nbsp;площадки&nbsp;— 1500&nbsp;рублей</p>
								<ul>
									<li><i className="icon-check _icon"></i>Высокая доходность
										от&nbsp;прослушиваний;
									</li>
									<li><i className="icon-check _icon"></i>Круглосуточная
										поддержка менеджера;
									</li>
									<li><i className="icon-check _icon"></i>Страница
										со&nbsp;ссылками уже включена в&nbsp;стоимость;
									</li>
									<li><i className="icon-check _icon"></i>Оперативное размещение
										релиза.
									</li>
								</ul>
								<h2>Дополнительные услуги:</h2>
								<p>Обложка от&nbsp;<span>1000&nbsp;рублей</span>.</p>
								<p>Анимация обложки от&nbsp;<span>5000&nbsp;рублей</span>.</p>
								<p>Составление пресс релиза
									и&nbsp;питчинг <span>по&nbsp;договоренности</span>.</p>
								<p>Размещение в плейлистах <span>по&nbsp;договоренности</span>.
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
								<h2>Преимущества:</h2>
								<h3><i className="icon-volume-high _icon"></i>Дистрибуция музыки
									по&nbsp;всему миру:</h3>
								<p><i className="icon-hand-pointer _icon"></i>Мы предоставляем
									качественный и&nbsp;эффективный сервис дистрибуции музыки
									без&nbsp;абонентской платы или&nbsp;сборов за&nbsp;доставку
									контента, позволяя вам оставаться независимыми и
									контролировать свое творчество. Обратитесь к&nbsp;нам, чтобы
									получить максимальную отдачу от&nbsp;вашей музыки
									и&nbsp;продвинуться на&nbsp;пути к&nbsp;успеху.</p>
								<h3><i className="icon-volume-high _icon"></i>Поддержка
									клиентов:</h3>
								<p><i className="icon-hand-pointer _icon"></i>Загрузите файлы
									вашего проекта на&nbsp;Яндекс или&nbsp;Google диск
									и&nbsp;предоставьте ссылку с&nbsp;открытым доступом
									к&nbsp;заказу.</p>
								<p><i className="icon-hand-pointer _icon"></i>Мы готовы помочь
									вам разобраться во&nbsp;всех тонкостях подготовки релизов
									к&nbsp;публикации.</p>
								<h3><i className="icon-volume-high _icon"></i>Доставка альбомов:
								</h3>
								<p><i className="icon-hand-pointer _icon"></i>Мы распространяем
									вашу музыку на&nbsp;всех актуальных цифровых площадках.</p>
								<p><i className="icon-volume-high _icon"></i>Питчинг
									релизов&nbsp;- отправляет ваши треки редакторам площадок
									для&nbsp;последующего попадания в&nbsp;плейлисты и&nbsp;на
									витрины сервисов. Чтобы попасть в&nbsp;рассылку, необходимо
									загрузить релиз хотя бы&nbsp;за 14&nbsp;дней до&nbsp;даты
									выпуска и&nbsp;подготовить небольшое описание, именно
									от&nbsp;него зависит, будет ли&nbsp;ваш материал замечен</p>
								<h3><i className="icon-volume-high _icon"></i>Контроль качества:
								</h3>
								<p><i className="icon-hand-pointer _icon"></i>Мы помогаем вам
									соблюдать требования к&nbsp;оформлению музыкальных альбомов,
									чтобы&nbsp;ваша музыка выглядела профессионально
									и&nbsp;привлекательно для&nbsp;слушателей.</p>
								<h3><i className="icon-volume-high _icon"></i>Авторские права:
								</h3>
								<p><i className="icon-hand-pointer _icon"></i>Мы помогаем
									защитить ваши авторские права&nbsp;с помощью систем
									идентификации контента, чтобы ваша музыка оставалась
									уникальной и&nbsp;защищенной от&nbsp;копирования.</p>
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
											 src={getPath('img/main/service/fotoram_bg_07.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_07.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title collections-title'>Создание
							сборников
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<p><i className="icon-hand-pointer _icon"></i>Наполните свой мир
									музыкой с&nbsp;нашими уникальными подборками
									и&nbsp;плейлистами, созданными специально для&nbsp;вас! Наша
									команда опытных музыкальных кураторов поможет вам создать
									идеальный саундтрек для&nbsp;любого случая - будь
									то&nbsp;романтический вечер, динамичная вечеринка, ресторана
									ил&nbsp; просто фоновая музыка для&nbsp;работы.</p>
								<p><i className="icon-hand-pointer _icon"></i>Позвольте нам
									погрузить вас в&nbsp;мир удивительных звуков и&nbsp;мелодий,
									которые подчеркнут каждый момент вашей жизни. Наша страсть
									к&nbsp;музыке отразится в&nbsp;каждом треке, делая ваше
									прослушивание незабываемым.</p>
								<ul>
									<li><i className="icon-musical-notes _icon"></i>Не упустите
										возможность превратить обыденные моменты в нечто особенное с
										нашими подборками и плейлистами. Доверьтесь профессионалам и
										насладитесь музыкой в полной мере. Сделайте заказ прямо
										сейчас и откройте для себя новые звуки!
									</li>
									<li><i className="icon-musical-notes _icon"></i>Индивидуальный
										подход: Мы создаем каждый плейлист с учетом ваших
										предпочтений, настроения и целей, чтобы предоставить вам
										уникальный саундтрек, который идеально подходит именно вам.
									</li>
									<li><i className="icon-musical-notes _icon"></i>Наши
										профессиональные кураторы тщательно отбирают треки для
										каждого плейлиста, учитывая последние тренды и ваше вкусовое
										предпочтение. Мы предлагаем широкий выбор жанров и стилей
										музыки, чтобы удовлетворить любой вкус.
									</li>
									<li><i className="icon-musical-notes _icon"></i>Вы можете
										заказать у нас сборник или плейлист быстро и легко, просто
										оставив заявку на нашем сайте. Мы гарантируем высокое
										качество звука и отбор только лучших треков для вашего
										плейлиста.
									</li>
									<li><i className="icon-musical-notes _icon"></i>Не упустите
										возможность создать неповторимую атмосферу в любой ситуации
										с помощью индивидуального саундтрека, который подчеркнет
										вашу индивидуальность!
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
SectionDistribution.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};