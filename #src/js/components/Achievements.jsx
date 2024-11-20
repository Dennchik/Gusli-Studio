import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Parallax from 'parallax-js';

import {
	animateTitles,
	refreshScrollTrigger,
} from '../animations/animations.jsx';

gsap.registerPlugin(ScrollTrigger);

export function Achievements() {

	useEffect(() => {
		const scene = document.querySelector('.scene');
		const parallax = new Parallax(scene);

		ScrollTrigger.refresh();
		// Очистка эффекта при размонтировании компонента
		return () => {
			parallax.destroy();
		};
	}, []);

	useEffect(() => {
		animateTitles(
			'.achieve-items__title',
			'.achieve-items__title',
			'.achieve-items__title',
			'=150',
			'=150',
		);
		refreshScrollTrigger();
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
				<div className="achieve-items__wrapper scene">
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-1.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-1.png'} alt="image" />}
						</picture>
						<div className="achieve-items__bg-image">
							<picture>
								{isWebpSupported()
									?
									<img src={'img/patterns/pattern-2.webp'} alt="image" />
									:
									<img src={'/img/patterns/pattern-2.png'} alt="image" />}
							</picture>
						</div>
					</div>
					<div data-depth="0.40" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-3.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-3.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-4.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-4.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-2.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-2.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="0.40" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-5.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-5.png'} alt="image" />}
						</picture>
					</div>
					<div data-depth="1.00" className="achieve-items__image">
						<picture>
							{isWebpSupported()
								? <img src={'img/about/slide/srt-6.webp'} alt="image" />
								: <img src={'/img/about/slide/srt-6.png'} alt="image" />}
						</picture>
					</div>
				</div>
			</div>
		</div>
	);
}
