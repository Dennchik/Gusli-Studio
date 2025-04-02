import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {applyParallax} from '../../animations/animations.jsx';

import modalOpen from '../../modules/modalOpen.js';
import returnToSavedPosition from '../../modules/return-position.js';

import {Header} from '../../components/layouts/Header.jsx';
import {About} from '../../components/sections/About.jsx';
import {Partners} from '../../components/sections/Partners.jsx';
import {Achievements} from '../../components/sections/Achievements.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';
import loaded from '../../assets/preloader.js';
import axios from 'axios';
import Seo from '../../Seo.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);

const baseUrl = '.';

function AboutPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(
		() => {
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
		if (!postData){
			loaded('.preloader');
		}
	}, [postData]);


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
	const [postData, setPost] = useState(null);
	useEffect(() => {
		axios
			.get(
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/589'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
				} else {
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				console.error('Error fetching post:', error);
			});
	}, []);
	const seoData = postData ? postData.yoast_head_json : null;
	const partners = postData ? postData.acf.clients : null;
	const certificates = postData ? postData.acf.certificates : null;
	const post_banner = postData ? postData.acf.post : null;
	return (
		<>
			{seoData && <Seo seoData={seoData} />}
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__about">
							{post_banner && <About baseUrl={baseUrl} post_banner={post_banner} />}
						</section>
						<section className="main-content__partners" id="partners">
							{partners && <Partners baseUrl={baseUrl} partners={partners} />}
						</section>
						<section className="main-content__achievements">
							{certificates && <Achievements certificates={certificates} />}
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
