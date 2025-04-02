import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { buildSwiper } from '../../layouts/build-swiper.js';
import { Slide } from '../../layouts/showreel-slide.js';
import axios from 'axios';

export const ShowreelSlide = () => {
	useEffect(() => {
		buildSwiper();
		Slide();
	}, []);
	const storedVideos = sessionStorage.getItem('videoPortfolio');
	let videos = storedVideos ? JSON.parse(storedVideos) : [];
	if (videos){
		axios
			.get(
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/500'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					const portfolio = response.data.acf.portfolio;
					const videoUrls = portfolio ? portfolio.map(item => item.video_url) : [];
					sessionStorage.setItem('videoPortfolio', JSON.stringify(videoUrls));
					videos = videoUrls;
				} else {
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				console.error('Error fetching post:', error);
			});
	}

	return (
		<div className="showreel _container">
			<div className="showreel__body">
				<div className="showreel__title">Наше портфолио</div>
				<div className="showreel-slide">
					<div className="showreel-slide__wrapper">
						<div className="showreel-slide__body _swiper">
							{videos && videos.map((src, index) => (
								<div className="showreel-slide__column" key={index}>
									<div className="showreel-slide__video">
										<iframe
											src={src}
											width="100%"
											height="360"
											style={{ border: 'none' }}
											allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
											allowFullScreen
											title={`Video ${index + 1}`}
										></iframe>
									</div>
								</div>
							))}
						</div>
						{/* Кнопки навигации */}
						<div className="showreel-slide__prev">
							<i className="icon-angle-left _icon"></i>
						</div>
						<div className="showreel-slide__next">
							<i className="icon-angle-right _icon"></i>
						</div>
					</div>
					<div className="showreel-slide__pagination"></div>
				</div>
			</div>
		</div>
	);
};

ShowreelSlide.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};
