import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { applyParallax } from '../../animations/animations.jsx';

import modalOpen from '../../modules/modalOpen.js';
import returnToSavedPosition from '../../modules/return-position.js';

import { Header } from '../../components/layouts/Header.jsx';
import { About } from '../../components/sections/About.jsx';
import { Partners } from '../../components/sections/Partners.jsx';
import { Achievements } from '../../components/sections/Achievements.jsx';
import { Footer } from '../../components/layouts/Footer.jsx';
import { MenuFloat } from '../../components/layouts/Menu-float.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);

const baseUrl = '.';

function AboutPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(() => {
		// create the smooth scroller FIRST!
		if (!isMobile) {
			const smoother = ScrollSmoother.create({
				wrapper: '#wrapper',
				content: '#content',
				smooth: 1.5,
				effects: true,
				smoothTouch: 0.5,
			});
			return () => {
				smoother.kill(); // Удаляем Smooth при размонтировании
			};
		}
	},
	);

	useEffect(() => {
		if (!isMobile) {
			applyParallax('.material-parallax');
		}
		modalOpen();
		returnToSavedPosition();
	}, []);

	useEffect(() => {
		const hash = window.location.hash; // Получаем якорь из URL
		if (hash) {
			const element = document.querySelector(hash); // Находим элемент по якорю
			if (element) {
				const headerHeight = document.querySelector(
					'.header')?.offsetHeight || 0;
				const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;// Абсолютная позиция
				window.scrollTo({
					top: offsetTop, // Добавляем корректировку отступа
					behavior: 'smooth', // Плавная прокрутка
				});
			}
		}
	}, []);

	return (
		<>
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__about">
							<About baseUrl={baseUrl} />
						</section>
						<section className="main-content__partners" id="partners">
							<Partners baseUrl={baseUrl} />
						</section>
						<section className="main-content__achievements">
							<Achievements />
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
			<section className="page__modal-image">
				<div className="modal _container">
					<div className="modal__body">
						<div className="modal__image">
							<div className="modal__close-button _close-modal">
								<i className="icon-angles-down-solid"></i>
							</div>
							<img src={'#'} alt="image" />
						</div>
					</div>
				</div>
				{/* <FormModal /> */}
			</section>
		</>
	);
}

export default AboutPage;
