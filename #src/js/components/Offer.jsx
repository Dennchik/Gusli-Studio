import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	animateTitles, refreshScrollTrigger,
	tlServices1,
	tlServices2
} from '../animations/animations.jsx';

export const Offer = () => {
	const isHomepage = location.pathname === '/';
	useEffect(() => {
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
								Включает час звукозаписи сведение и мастеринг.
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
								коррекция, сведение и мастеринг.
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
								Час звукозаписи, Педагог по вокалу поможет раскрыть ваш голос
								присутствуя на звукозаписи, Продюсирование, отбор лучших
								дублей, нотная коррекция, сведение и мастеринг.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
					<div className="offer-container__column sr-4">
						<div className="offer-container__wrapper">
							<a className="offer-container__link" href="#">
								<div className="offer-container__title-box">
									<span>Съемка клипа в студии</span>
									<span>
                      от 5 000<i className="icon-rub"></i>
                    </span>
								</div>
							</a>
							<div className="offer-container__text">
								При заказе клипа в нашей студии вы получаете не только
								профессиональное видео высокого качества, но и дополнительные
								преимущества! Мы рады предоставить вам скидку в размере 10% на
								ваш заказ.
							</div>
						</div>
						<div className="offer-container__thumbnail"></div>
					</div>
				</div>
				<div className="offer-container__button _clip-circle">
					<button className="submit-button" type={'submit'}>
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