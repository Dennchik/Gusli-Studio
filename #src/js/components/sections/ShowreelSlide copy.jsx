import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { buildSwiper } from '../../layouts/build-swiper.js';
import { Slide } from '../../layouts/showreel-slide.js';
//* ------------------------ Component's MainSlide -----------------------------

export const ShowreelSlide = ({ baseUrl }) => {
	// const videoRef = useRef(null); 

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};
	useEffect(() => {
		buildSwiper();
		Slide();
	}, []);

	return (
		<div className="showreel _container">
			<div className="showreel__body">
				<div className="showreel__title">Наше портфолио</div>
				<div className="showreel-slide">
					<div className="showreel-slide__wrapper">
						<div className="showreel-slide__body _swiper">
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<iframe
										src="https://vkvideo.ru/video_ext.php?oid=-34047302&id=456239292&hash=2f100df0a860db2a" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
										width="100%"
										height="360" allowFullScreen
										style={{ border: 'none' }}
										title="VK Video">
									</iframe>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<iframe
										src="https://vkvideo.ru/video_ext.php?oid=-34959880&id=456239710&hash=8a89eaf20743c9c9" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
										width="100%"
										height="360"
										style={{ border: 'none' }}
										allowFullScreen
										title="VK Video">
									</iframe>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<iframe src="https://vk.com/video_ext.php?oid=-34047302&id=456239285&hash=664e9ec53dc0a682" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
										width="100%"
										height="360"
										style={{ border: 'none' }}
										allowFullScreen
										title="VK Video">
									</iframe>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<iframe src="https://vk.com/video_ext.php?oid=-34047302&id=456239273&hash=b0edd8188dbe2868" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
										width="100%"
										height="360"
										style={{ border: 'none' }}
										allowFullScreen
										title="VK Video">
									</iframe>
								</div>
							</div>
							<div className="showreel-slide__column">
								<div className="showreel-slide__video">
									<iframe src="https://vk.com/video_ext.php?oid=-34047302&id=456239262&hash=1fadd2ef5517a804" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
										width="100%"
										height="360"
										style={{ border: 'none' }}
										allowFullScreen
										title="VK Video">
									</iframe>
								</div>
							</div>
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