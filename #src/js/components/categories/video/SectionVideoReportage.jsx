import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionVideoReportage = ({ baseUrl }) => {
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
									src={getPath('img/parallax/video/fotoram_bg_02.webp')}
									alt="image" />
							)
								: (
									<img className="parallax__image-services bg"
										src={getPath('img/parallax/video/fotoram_bg_02.png')}
										alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className='service-description__content _container'>
						<h1 className="service-description__title">
							Репортаж с&nbsp;выездом
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-clapper _icon"></i>Хотите оставить
										яркие
										и &nbsp;эмоциональные воспоминания о&nbsp;важном событии?
										Тогда&nbsp;репортажная съемка&nbsp;- идеальный способ
										сделать
										это! Наши профессиональные фотографы помогут вам
										запечатлеть
										каждую деталь и&nbsp;эмоцию момента, чтобы&nbsp;вы могли
										вернуться к&nbsp;ним снова и&nbsp;снова.
									</p>
									<p><i className="icon-clapper _icon"></i>Репортажная съемка
										позволяет передать атмосферу и&nbsp;настроение события
										в&nbsp;полной мере. Мы умеем уловить момент и&nbsp;сделать
										уникальные кадры, которые будут радовать вас и&nbsp;ваших
										близких на&nbsp;протяжении многих лет.</p>
									<p><i className="icon-clapper _icon"></i>Не упустите
										возможность
										сохранить важные моменты своей жизни с&nbsp;помощью
										профессиональной репортажной съемки. Обратитесь
										к&nbsp;нам,
										и&nbsp;мы поможем вам создать незабываемые воспоминания,
										которые будут цениться вами и&nbsp;вашими близкими всегда.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionVideoReportage.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};