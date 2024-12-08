import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoPresentation = ({baseUrl}) => {
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
			<div className="service-description__column-parallax">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services"
											 src={getPath('img/parallax/video/fotoram_bg_16.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/parallax/video/fotoram_bg_16.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title video-presentations-title">
							презентационные ролики
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">

								<p><i className="icon-hand-pointer _icon"></i>Яркий ролик
									заставит человека остановиться и&nbsp;сконцентрировать
									внимание на &nbsp;содержании.
								</p>
								<p><i className="icon-hand-pointer _icon"></i>
									В видео можно емко описать преимущества вашего торгового
									предложения и&nbsp;подтвердить их&nbsp;визуально.</p>
								<p><i className="icon-hand-pointer _icon"></i>
									Презентационный ролик о&nbsp;компании снижает расходы
									на &nbsp;проведение бизнес-встреч, ведь его&nbsp;можно
									демонстрировать без &nbsp;привлечения доп. сотрудников.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};
SectionVideoPresentation.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};