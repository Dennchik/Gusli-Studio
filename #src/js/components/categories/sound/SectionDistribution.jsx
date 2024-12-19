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
											 src={getPath('img/parallax/sound/fotoram_bg_04.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/sound/fotoram_bg_04.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Дистрибуция
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h2>Что от Вас нужно?</h2>
									<p><i className="icon-hand-pointer _icon"></i>Прежде всего,
										необходимо подготовить материал, который будет
										соответствовать
										требованиям качества для&nbsp;радио и&nbsp;музыкальных
										площадок. Это&nbsp;может быть сведённый
										и&nbsp;отмастеринговый
										материал.</p>
									<p><i className="icon-hand-pointer _icon"></i>Загрузите файлы
										вашего проекта на&nbsp;Яндекс или&nbsp;Google диск
										и&nbsp;предоставьте ссылку с&nbsp;открытым доступом
										к&nbsp;заказу.</p>
									<p><i className="icon-hand-pointer _icon"></i>Внесите
										информацию
										о&nbsp;релизе в&nbsp;форму и укажите дату его выхода
										на&nbsp;площадки.</p>
									<p><i className="icon-hand-pointer _icon"></i>Ожидайте
										появления
										вашего релиза на&nbsp;всех официальных площадках страны
										и&nbsp;мира в&nbsp;назначенный день.</p>
								</div>
							</div>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h3>Стоимость услуг:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>выгрузка трека на&nbsp;площадки&nbsp;—
												<span>1500&nbsp;рублей</span></p></li>
										<li><i className="icon-check _icon"></i>
											высокая доходность от&nbsp;прослушиваний;
										</li>
										<li><i className="icon-check _icon"></i>
											круглосуточная поддержка менеджера;
										</li>
										<li><i className="icon-check _icon"></i>
											страница со&nbsp;ссылками уже включена в&nbsp;стоимость;
										</li>
										<li><i className="icon-check _icon"></i>
											оперативное размещение релиза.
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h3>Дополнительные услуги:</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>обложка от&nbsp;<span>1000&nbsp;рублей</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>Анимация обложки от&nbsp;
												<span>5000&nbsp;рублей</span>;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>составление пресс релиза
												и&nbsp;питчинг <span> по&nbsp;договоренности</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>размещение в&mnsp;плейлистах
												<span> по&nbsp;договоренности</span>.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<h2>Преимущества</h2>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h3><i className="icon-volume-high _icon"></i>
										Дистрибуция музыки по&nbsp;всему миру</h3>
									<p><i className="icon-hand-pointer _icon"></i>Мы
										предоставляем
										качественный и&nbsp;эффективный сервис дистрибуции музыки
										без&nbsp;абонентской платы или&nbsp;сборов
										за&nbsp;доставку
										контента, позволяя вам оставаться независимыми и
										контролировать свое творчество. Обратитесь к&nbsp;нам,
										чтобы
										получить максимальную отдачу от&nbsp;вашей музыки
										и&nbsp;продвинуться на&nbsp;пути к&nbsp;успеху.</p>
									<h3><i className="icon-volume-high _icon"></i>
										Поддержка клиентов</h3>
									<p><i className="icon-hand-pointer _icon"></i>
										Загрузите файлы вашего проекта на&nbsp;Яндекс
										или&nbsp;Google диск и&nbsp;предоставьте ссылку
										с&nbsp;открытым доступом к&nbsp;заказу.</p>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы готовы помочь вам разобраться во&nbsp;всех тонкостях
										подготовки релизов к&nbsp;публикации.</p>
									<h3><i className="icon-volume-high _icon"></i>
										Доставка альбомов
									</h3>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы распространяем вашу музыку на&nbsp;всех актуальных
										цифровых площадках.
									</p>
								</div>
								<div className="service-description__row-col">
									<h3><i className="icon-volume-high _icon"></i>
										Питчинг релизов
									</h3>
									<p><i className="icon-hand-pointer _icon"></i>
										Отправляет ваши треки редакторам площадок
										для&nbsp;последующего попадания в&nbsp;плейлисты и&nbsp;на
										витрины сервисов. Чтобы попасть в&nbsp;рассылку,
										необходимо загрузить релиз хотя бы&nbsp;за 14&nbsp;дней
										до&nbsp;даты выпуска и&nbsp;подготовить небольшое писание,
										именно от&nbsp;него зависит, будет ли&nbsp;ваш материал
										замечен.
									</p>
									<h3><i className="icon-volume-high _icon"></i>
										Контроль качества
									</h3>
									<p><i className="icon-hand-pointer _icon"></i>
										Мы помогаем вам соблюдать требования к&nbsp;оформлению
										музыкальных альбомов, чтобы&nbsp;ваша музыка выглядела
										профессионально и&nbsp;привлекательно для&nbsp;слушателей.
									</p>
									<h3><i className="icon-volume-high _icon"></i>
										Авторские права
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
			</div>
		</div>
	);
};
SectionDistribution.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};