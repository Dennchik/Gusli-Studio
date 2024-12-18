import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoPodcast = ({baseUrl}) => {
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
											 src={getPath('img/parallax/video/fotoram_bg_03.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_03.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							видеоподкасты
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__items">
									<div className="service-description__list-item-col">
										<p><i className="icon-clapper _icon"></i>Для создания
											привлекательного и&nbsp;убедительного контента
											для &nbsp;вашего подкаста, важно уделить внимание
											не&nbsp;только содержанию, но&nbsp;и&nbsp;его презентации.
											Вот&nbsp;несколько советов по&nbsp;эффективной работе
											с&nbsp;текстом:
										</p>
										<ul>
											<li><i className="icon-check _icon"></i>
												<p>Используйте простой и&nbsp;понятный язык,
													чтобы&nbsp;ваше сообщение было доступно
													для &nbsp;аудитории. Избегайте сложных технических
													терминов, если&nbsp;ваша целевая аудитория
													не&nbsp;специализируется в&nbsp;этой области;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Используйте слова, которые помогут передать вашу
													страсть
													и&nbsp;увлечённость темой подкаста, чтобы вызвать
													эмоции
													у&nbsp;слушателей;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Сделайте заголовок увлекательным
													и&nbsp;информативным,
													чтобы&nbsp;привлечь внимание потенциальных слушателей.
													В&nbsp;описании к&nbsp;подкасту расскажите, о&nbsp;чём
													будет речь и&nbsp;почему это&nbsp;интересно;</p>
											</li>
											<li><i className="icon-check _icon"></i>
												<p>Побудите аудиторию к&nbsp;действию,
													рассказав&nbsp;им,
													что&nbsp;они могут получить, послушав ваш подкаст,
													и&nbsp;как они&nbsp;могут поддержать ваш контент
													(подписка, репост, комментарий и&nbsp;т.д.).</p>
											</li>
										</ul>
									</div>
									<div className="service-description__list-item-col">

										<p><i className="icon-clapper _icon"></i>Почему стоит
											выбрать
											именно нас для&nbsp;записи вашего
											видео-подкаста:</p>
										<ul>
											<li><i className="icon-check _icon"></i>Профессиональное
												оборудование и&nbsp;звукорежиссура**: Мы располагаем
												современным оборудованием и&nbsp;опытным
												звукорежиссёром,
												который обеспечит высокое качество видео и&nbsp;отличный
												звук.
											</li>
											<li><i className="icon-check _icon"></i>Индивидуальный
												подход**: Мы выслушаем ваши потребности и&nbsp;цели,
												чтобы&nbsp;создать видео-подкаст, идеально
												соответствующий
												вашим ожиданиям.
											</li>
											<li><i className="icon-check _icon"></i>Профессионализм
												и&nbsp;опыт: Наша команда имеет обширный опыт
												в&nbsp;создании видео-контента и&nbsp;гарантирует
												качественный результат.
											</li>
											<li><i className="icon-check _icon"></i>Уютная и тихая
												обстановка**: У&nbsp;нас вы сможете сосредоточиться
												на&nbsp;контенте вашего подкаста в&nbsp;уютной
												и&nbsp;спокойной обстановке.
											</li>
											<li><i className="icon-check _icon"></i>Сопровождение
												на7nbsp;всех этапах**: Мы предоставляем полную поддержку
												н&nbsp;всех этапах создания видео-подкаста&nbsp;–
												от&nbsp;концепции до&nbsp;публикации, чтобы&nbsp;вы
												могли
												быть уверены в&nbsp;успехе вашего проекта.
											</li>
										</ul>
									</div>
								</div>
								<p className="service-description__ps">Помните, что&nbsp;главное
									в&nbsp;подкасте&nbsp;– это&nbsp;ваша идея и&nbsp;страсть
									к&nbsp;теме. Уделите время на&nbsp;подготовку контента
									и&nbsp;его&nbsp;презентацию, и&nbsp;ваш подкаст будет
									привлекать слушателей и&nbsp;оставаться в &nbsp;памяти</p>
								<p className="service-description__ps">Доверьте запись вашего
									видео-подкаста профессионалам и&nbsp;создайте контент,
									который
									будет запоминаться и&nbsp;вдохновлять вашу аудиторию.
									Обратитесь к&nbsp;нам и&nbsp;убедитесь в&nbsp;высоком
									качестве наших услуг!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionVideoPodcast.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};