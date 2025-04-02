import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

import returnToSavedPosition from '../../modules/return-position.js';
import {applyParallax} from '../../animations/animations.jsx';

import {Header} from '../../components/layouts/Header.jsx';
import {ServiceText} from '../../components/categories/ServiceText.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';
import {FormModal} from '../../components/layouts/FormModal.jsx';
import axios from 'axios';
import loaded from '../../assets/preloader.js';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '..';

function TextPage() {
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
					smoothTouch: 0.1,
				});
				return () => {
					smoother.kill(); // Удаляем Smooth при размонтировании
				};
			}
		},
	);
	const [postData, setPost] = useState(null);
	useEffect(() => {
		axios
			.get(
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/502'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
					let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
					storedData['text'] = response.data.acf.prays;
					sessionStorage.setItem('offer', JSON.stringify(storedData));

					let storedData2 = JSON.parse(sessionStorage.getItem('uslugi')) || {};
					storedData2['text'] = response.data.acf.uslugi;
					sessionStorage.setItem('uslugi', JSON.stringify(storedData2));
				} else {
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				console.error('Error fetching post:', error);
			});
	}, []);
	useEffect(() => {
		if (!isMobile) {
			applyParallax('.material-parallax');
		}
		returnToSavedPosition();
		if (!postData){
			loaded('.preloader');
		}
	}, [postData]);

	return (
		<>
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__services">
							<ServiceText baseUrl={baseUrl} />
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
			<section className="page__form-modal">
				<FormModal />
			</section>
		</>
	);
}

export default TextPage;
