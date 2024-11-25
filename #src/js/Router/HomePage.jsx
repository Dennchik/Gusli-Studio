import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import parallaxEffect from '../animations/parallax.jsx';

import { Header } from '../layouts/Header.jsx';
import { MainSlide } from '../components/MainSlide.jsx';
import { Services } from '../components/Services.jsx';
import { Footer } from '../layouts/Footer.jsx';
import { MenuFloat } from '../layouts/Menu-float.jsx';

import returnToSavedPosition from '../modules/return-position.js';
import { FormModal } from '../сontext/FormModal .jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '.';


function HomePage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	useGSAP(

		() => {
			// create the smooth scroller FIRST!
			if (!isMobile) {
				const smoother = ScrollSmoother.create({
					wrapper: '#wrapper',
					content: '#content',
					smooth: 1,
					effects: true,
					smoothTouch: 0.1,
				});
				return () => {
					smoother.kill(); // Удаляем Smooth при размонтировании
				};
			}
		},
	);
	useEffect(() => {
		if (!isMobile) {
			// parallaxEffect();
		}
		returnToSavedPosition();
	}, []);

	return (
		<>
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__slide">
							<MainSlide baseUrl={baseUrl} />
						</section>
						<section className="main-content__services">
							<Services baseUrl={baseUrl} />
						</section>
						<footer className="main-content__footer" id="footer">
							<Footer baseUrl={baseUrl} isHomePage={true} />
						</footer>
					</div>
				</div>
			</main>
			<div className="page__menu-float">
				<MenuFloat baseUrl={baseUrl} />
			</div>
			<div className="page__aside" id="scrollButton">
				<i className="icon-angle-down _button"></i>
			</div>
			<section className="page__form-modal"
			// role="dialog"
			// aria-labelledby="modalTitle"
			// aria-modal="true"
			>
				<FormModal />
			</section>
		</>
	);
}
export default HomePage;
