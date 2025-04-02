import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger,
	tlServices1,
	tlServices2
} from '../../animations/animations.jsx';

export const Offer = ({ page }) => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const IDS = {
		dev: 498,
		event: 504,
		sound: 495,
		text: 502,
		video: 500,
		index: 452,
	};
	let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
	const offerData = storedData[page];
	useEffect(() => {
		if (!isMobile) {
			animateTitles('.offer-container__title', '.offer-container__title', '.offer-container__title', '=150', '=150');
			tlServices1();
			tlServices2();
			refreshScrollTrigger();
		}
	}, [isMobile]);

	if (!offerData) return null; // Ma'lumot bo'lmasa, hech narsa qaytarmaydi

	return (
		<div className="offer-container _container">
			<div className="offer-container__body">
				<div className="offer-container__title">Специальное предложение</div>
				<div className="offer-container__content">
					{offerData.map((item, index) => (
						<div key={index} className={`offer-container__column sr-${index + 1}`}>
							<div className="offer-container__wrapper">
								<a className="offer-container__link" href="#">
									<div className="offer-container__title-box">
										<span>{item.title}</span>
										<span>
                                            {item.price}
											<i className="icon-rub"></i>
                                        </span>
									</div>
								</a>
								<div className="offer-container__text">{item.desc}</div>
							</div>
							<div className="offer-container__thumbnail"></div>
						</div>
					))}
				</div>
				<div className="offer-container__button _open-button">
					<button className="order-button btn-grad" type="button">
						<span>оставить заявку</span>
					</button>
				</div>
			</div>
		</div>
	);
};

Offer.propTypes = {
	baseUrl: PropTypes.string.isRequired
};
