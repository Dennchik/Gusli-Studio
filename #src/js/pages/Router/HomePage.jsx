import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

import {applyParallax} from '../../animations/animations.jsx';
import returnToSavedPosition from '../../modules/return-position.js';

import {Header} from '../../components/layouts/Header.jsx';
import {Showreel} from '../../components/sections/Showreel.jsx';
import {Services} from '../../components/sections/Services.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';
import {FormModal} from '../../components/layouts/FormModal.jsx';
import axios from 'axios';
import loaded from '../../assets/preloader.js';
import Seo from '../../Seo.jsx';

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
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/452'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
					sessionStorage.setItem('FooterData', JSON.stringify(response.data.acf.footer_data[0]));

					let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
					storedData['index'] = response.data.acf.prays;
					sessionStorage.setItem('offer', JSON.stringify(storedData));
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
	const seoData = postData ? postData.yoast_head_json : null;
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
						<section className="main-content__video">
							{post_banner && <Showreel baseUrl={baseUrl} post_banner={post_banner} />}
						</section>
						<section className="main-content__categories">
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
