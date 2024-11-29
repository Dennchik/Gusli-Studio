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

export function Achievements() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const [selectedRadio, setSelectedRadio] = useState('1'); // Состояние для выбранной радио-кнопки
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
	}, []);

	// const [scale, setScale] = useState(1);
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		const newScale = 2.4 + (1 - 2.4) * ((window.innerWidth - 320) / (1920 - 320));
	// 		setScale(newScale);
	// 	};

	// 	handleResize(); // Установим начальный масштаб
	// 	window.addEventListener('resize', handleResize);

	// 	return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 	};
	// }, []);


	useEffect(() => {
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
					<div className="parallax__image-blur">
						<picture>
							{isWebpSupported()
								?
								<img src={'img/patterns/pattern-2.webp'} alt="image" />
								:
								<img src={'/img/patterns/pattern-2.png'} alt="image" />}
						</picture>
					</div>
					{/* <img className='parallax__image-achieve bg' */}
					{/* 		 src={'img/patterns/pattern-8.webp'} alt="image" /> */}
				</div>
			</div>
			<div className="achieve-items__body _container">
				<div className="achieve-items__title">наши достижения</div>
				<div className="achieve-items__wrapper _container">
					<section className="gallery">
						<div className="gallery__items">
							<input type="radio" id="in-1" value="1" name="tractor"
								checked={selectedRadio === '1'}
								onChange={handleRadioChange}
							/>
							<input type="radio" id="in-2" value="2" name="tractor"
								checked={selectedRadio === '2'}
								onChange={handleRadioChange}
							/>
							<input type="radio" id="in-3" value="3" name="tractor"
								checked={selectedRadio === '3'}
								onChange={handleRadioChange}
							/>
							<input type="radio" id="in-4" value="4" name="tractor"
								checked={selectedRadio === '4'}
								onChange={handleRadioChange}
							/>
							<input type="radio" id="in-5" value="5" name="tractor"
								checked={selectedRadio === '5'}
								onChange={handleRadioChange}
							/>
							<input type="radio" id="in-6" value="6" name="tractor"
								checked={selectedRadio === '6'}
								onChange={handleRadioChange}
							/>
							{/* --------------- gallery__card sv-1 --------------- */}
							<article className="gallery__card sv-1">
								<div className="gallery__image _ibg">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-1.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Сертификат об&nbsp;обучении</h2>
									</div>

									<div className="gallery__text">
										<p>Сертификат об&nbsp;обучении<br />по&nbsp;программе &quot;Акселератор Социальное&nbsp;предпринимательство&quot;</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-6" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-2" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-1" className="icon-cycle afin"></label>
								</div>
							</article>
							{/* --------------- gallery__card sv-2 --------------- */}
							<article className="gallery__card sv-2">
								<div className="gallery__image _ibg">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-2.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-2.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Сертификат об&nbsp;обучении</h2>
									</div>

									<div className="gallery__text">
										<p>Благодарность<br />
											Медицинский техникум<br />
											&quot;Здравый&nbsp;путь&quot;</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-1" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-3" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-2" className="icon-cycle afin"></label>
								</div>
							</article>

							{/* --------------- gallery__card sv-3 --------------- */}
							<article className="gallery__card sv-3">
								<div className="gallery__image _ibg" data-depth="1.00">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-7.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-7.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Благодарственное&nbsp;письмо</h2>
									</div>
									<div className="gallery__text">
										<p>Пасхальная кинолектория<br />
											Калужской епархии<br />
											за показ фильма &quot;Капитан&quot;<br />
											для школьников.
										</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-2" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-4" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-3" className="icon-cycle afin"></label>
								</div>
							</article>

							{/* --------------- gallery__card sv-4 --------------- */}
							<article className="gallery__card sv-4">
								<div className="gallery__image _ibg">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-4.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-4.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Диплом&nbsp;победителя</h2>
									</div>
									<div className="gallery__text">
										<p>Региональный этап<br />
											Международной премии МыВместе<br />
											Диплом победителя<br />
											Номинация <br />
											&quot;Медиапроект&quot; Трек: НКО
										</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-3" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-5" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-4" className="icon-cycle afin"></label>
								</div>
							</article>

							{/* --------------- gallery__card sv-5 --------------- */}
							<article className="gallery__card sv-5">
								<div className="gallery__image _ibg">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-5.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-5.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Благодарственное письмо</h2>
									</div>

									<div className="gallery__text">
										<p>За организацию и проведение<br />
											концертной программы<br />
											&quot;Для молодежи&quot;<br />
											г. Обнинск.</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-4" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-6" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-5" className="icon-cycle afin"></label>
								</div>
							</article>

							{/* --------------- gallery__card sv-6 --------------- */}
							<article className="gallery__card sv-6">
								<div className="gallery__image _ibg">
									<picture>
										{isWebpSupported()
											? <img src={'img/about/slide/srt-6.webp'} alt="image" />
											: <img src={'/img/about/slide/srt-6.png'} alt="image" />}
									</picture>
								</div>

								<div className='gallery__mesh-gradient _ibg'>
									<img src={'img/about/bg_svg.svg'} alt="image" />
								</div>

								<div className="gallery__content">
									<div className="gallery__title">
										<i className="icon-feather _icon"></i>
										<h2 className='gallery__tag'>
											Благодарственное письмо</h2>
									</div>
									<div className="gallery__text">
										<p>За победу в конкурсе<br />
											на предоставление грантов<br />
											Президента Российской Федерации<br />
											проект &quot;Капитан&quot; <br />
											фильм о&nbsp;начале <br />
											&quot;Великой Отечественной войны&quot;
										</p>
									</div>
									<div className="gallery__footer">
										<label htmlFor="in-5" className="icon-arrow-left otra"></label>
										<i className="icon-magnifying-glass otra _open-button"></i>
										<label htmlFor="in-1" className="icon-arrow-right otra"></label>
									</div>
									<label htmlFor="in-6" className="icon-cycle afin"></label>
								</div>
							</article>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
