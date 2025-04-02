import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import modal from '../../modules/modal.js';
import {
	animateTitles,
	refreshScrollTrigger,
} from '../../animations/animations.jsx';

gsap.registerPlugin(ScrollTrigger);

export function Achievements({certificates}) {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	// Состояние для выбранной радио-кнопки
	const [selectedRadio, setSelectedRadio] = useState('1');
	const handleRadioChange = (e) => {
		setSelectedRadio(e.target.value); // Устанавливаем выбранное значение
	};

	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.achieve-items__title',
				'.achieve-items__title',
				'.achieve-items__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();
		}
		modal();
	}, []);

	return (
		<div className="achieve-items">
			<div className="material-parallax parallax _image-achieve">
				<div className="parallax__image">
					<picture>
						{isWebpSupported()
							? <img className='parallax__image-achieve bg'
										 src={'img/about/pattern.webp'} alt="image" />
							: <img className='parallax__image-achieve bg'
										 src={'img/about/pattern.png'} alt="image" />}
					</picture>
				</div>
			</div>
			<div className="achieve-items__body _container">
				<h1 className="achieve-items__title">наши достижения</h1>
				<div className="achieve-items__wrapper _container">
					<section className="gallery">
						<div className="gallery__items">
							<div className="gallery__items">
								{certificates.map((certificate, index) => (
										<input
											type="radio"
											id={`in-${index + 1}`}
											value={`${index + 1}`}
											name="tractor"
											checked={selectedRadio === `${index + 1}`}
											onChange={handleRadioChange}
										/>
								))}
								{certificates.map((certificate, index) => (
									<article className={`gallery__card sv-${index + 1}`} key={index}>
										<div className="gallery__image _ibg">
											<picture>
													<img src={certificate.img} alt="image"/>
											</picture>
										</div>
										<div className='gallery__mesh-gradient _ibg'>
											<img src={'img/parallax/bg_svg.svg'} alt="image"/>
										</div>

										<div className="gallery__content">
											<div className="gallery__title">
												<i className="icon-feather _icon"></i>
												<h2 className='gallery__tag'>{certificate.title}</h2>
											</div>
											<div className="gallery__text" style={{ whiteSpace: 'pre-line' }}>
												<p>{certificate.desc}</p>
											</div>
											<div className="gallery__footer">
												<label htmlFor={`in-${index === 0 ? certificates.length : index}`}
													   className="icon-arrow-left otra"></label>
												<i className="icon-magnifying-glass otra _open-button"></i>
												<label
													htmlFor={`in-${(index + 2) > certificates.length ? 1 : index + 2}`}
													className="icon-arrow-right otra"></label>
											</div>
											<label htmlFor={`in-${index + 1}`} className="icon-cycle afin"></label>
										</div>
									</article>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
