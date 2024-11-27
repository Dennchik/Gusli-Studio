import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import returnToSavedPosition from '../../modules/return-position.js';
import parallaxEffect from '../../animations/parallax.jsx';

import { Header } from '../../components/layouts/Header.jsx';
import { Footer } from '../../components/layouts/Footer.jsx';
import { Offer } from '../../components/chunks/Offer.jsx';
import { Answers } from '../../components/Answers.jsx';
import { MenuFloat } from '../../components/layouts/Menu-float.jsx';
import { FormModal } from '../../components/layouts/FormModal.jsx';

import { SectionMusician } from '../../components/categories/sound/SectionMusician.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '../..';
function MusicianPage() {
	useGSAP(
		() => {
			// create the smooth scroller FIRST!
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
		},
	);

	useEffect(() => {
		parallaxEffect();
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
						<section className="main-content__musician">
							<SectionMusician baseUrl={baseUrl} isHomePage={true} />
						</section>
						<section className="main-content__offer">
							<Offer baseUrl={baseUrl} />
						</section>
						<section className="main-content__questions">
							<Answers baseUrl={baseUrl} />
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
				role="dialog"
				aria-labelledby="modalTitle"
				aria-modal="true">
				<FormModal />
			</section>
		</>
	);
}

export default MusicianPage;