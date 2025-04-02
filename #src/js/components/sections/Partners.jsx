import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../animations/animations.jsx';
import { buildSwiper } from '../../layouts/build-swiper.js';
import { partnersSlide } from '../../layouts/partners-slide.js';


export const Partners = ({partners}) => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	useEffect(() => {
		buildSwiper();
		partnersSlide();
		if (!isMobile) {
			animateTitles(
				'.partners__title',
				'.partners__title',
				'.partners__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();
		}
	}, []);

	return (
		<div className="partners _container">
			<div className="partners__body">
				<div className="partners__title">С кем работали</div>
				<div className="partners__content">
					<div className="partners-slide">
						<div className="partners-slide__body _swiper">
							{partners  &&
								partners.map((client, index) => (
									// eslint-disable-next-line react/jsx-key
									<div className={`partners-slide__column ${index === 0 ? 'container' : ''}`}>
										<div className="partners-slide__content">
											<div className="partners-slide__image">
												<picture>
													<img src={client.img} alt={client.name}/>
												</picture>
											</div>
											<div className="box partners-slide__title el">{client.name}</div>
											<div className="partners-slide__text">{client.desc}</div>
										</div>
									</div>
								))
							}
						</div>
						<div className="partners-slide__pagination"></div>
					</div>
				</div>
			</div>
		</div>);
};

Partners.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};