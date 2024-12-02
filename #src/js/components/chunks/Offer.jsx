import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger,
	tlServices1,
	tlServices2
} from '../../animations/animations.jsx';

export const Offer = () => {
	const isHomepage = location.pathname === '/';
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.offer-container__title',
				'.offer-container__title',
				'.offer-container__title',
				'=150',
				'=150',
			);
			tlServices1();
			tlServices2();
			refreshScrollTrigger();
		}
	}, [location.pathname, isHomepage]);

	return (
		<div className="offer-container _container">
			<div className="offer-container__body">
				<div className="offer-container__title">Специальное предложение</div>
				<div className="offer-container__content">
					<div className="offer-container__column sr-1">
						<div className="offer-container__wrapper">
							<a className="offer-container__link" href="#">
								<div className="offer-container__title-box">
									<span>Пакет Домашний</span>
									<span>
										5 000<i className="icon-rub"> </i>
									</span>
								</div>
							</a>
							<div className="offer-container__text">
								Включает час звукозаписи сведение и&nbsp;мастеринг.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
					<div className="offer-container__column sr-2">
						<div className="offer-container__wrapper">
							<a className="offer-container__link" href="#">
								<div className="offer-container__title-box">
									<span>Пакет Комфорт</span>
									<span>
										8 000<i className="icon-rub"></i>
									</span>
								</div>
							</a>
							<div className="offer-container__text">
								Час звукозаписи, Продюсирование, отбор лучших дублей, нотная
								коррекция, сведение и&nbsp;мастеринг.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
					<div className="offer-container__column sr-3">
						<div className="offer-container__wrapper">
							<a className="offer-container__link" href="#">
								<div className="offer-container__title-box">
									<span>Пакет Профи</span>
									<span>
										12 000<i className="icon-rub"></i>
									</span>
								</div>
							</a>
							<div className="offer-container__text">
								Час звукозаписи, Педагог по&nbsp;вокалу поможет раскрыть ваш
								голос
								присутствуя на&nbsp;звукозаписи, Продюсирование, отбор лучших
								дублей, нотная коррекция, сведение и&nbsp;мастеринг.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
					<div className="offer-container__column sr-4">
						<div className="offer-container__wrapper">
							<a className="offer-container__link" href="#">
								<div className="offer-container__title-box">
									<span>Съемка в студии</span>
									<span>
										от 5 000<i className="icon-rub"></i>
									</span>
								</div>
							</a>
							<div className="offer-container__text">
								При заказе клипа в&nbsp;нашей студии вы получаете не&nbsp;только
								профессиональное видео высокого качества,
								но&nbsp;и&nbsp;дополнительные
								преимущества! Мы рады предоставить вам скидку в&nbsp;размере 10%
								на &nbsp;ваш заказ.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
				</div>
				<div className="offer-container__button _open-button">
					<button className="order-button btn-grad"
									type={'button'}>
						<span>оставить заявку</span>
					</button>
				</div>
			</div>
		</div>
	);
};
Offer.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};