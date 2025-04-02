import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

import returnToSavedPosition from '../../modules/return-position.js';
import {applyParallax} from '../../animations/animations.jsx';

import {Header} from '../../components/layouts/Header.jsx';
import {VideoSlide} from '../../components/sections/VideoSlide.jsx';
import {ServiceVideo} from '../../components/categories/ServiceVideo.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';
import {FormModal} from '../../components/layouts/FormModal.jsx';
import axios from 'axios';
import loaded from '../../assets/preloader.js';
import Seo from '../../Seo.jsx';
import modalOpen from '../../modules/modalOpen.js';
import {buttonShow} from '../../animations/anime-js.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '..';

function VidePage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const [postData, setPost] = useState(null);
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

	useEffect(() => {
		buttonShow();
		modalOpen();
		if (!isMobile) {
			applyParallax('.material-parallax');
		}
		returnToSavedPosition();
		if (!postData){
			loaded('.preloader');
		}
	}, [postData]);

	useEffect(() => {
		axios
			.get(
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/500'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
					let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
					storedData['video'] = response.data.acf.prays;
					sessionStorage.setItem('offer', JSON.stringify(storedData));
				} else {
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				console.error('Error fetching post:', error);
			});
	}, []);
	const SeoData = postData ? postData.yoast_head_json : null;
	const Uslugi = postData ? postData.acf.uslugi : null;
	const post_banner = postData ? postData.acf.post : null;
	const portfolio = postData ? postData.acf.portfolio : null;
	const videoUrls = portfolio ? portfolio.map(item => item.video_url) : [];
	sessionStorage.setItem('videoPortfolio', JSON.stringify(videoUrls));
	return (
		<>
			{SeoData && <Seo seoData={SeoData} />}
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__video">
							{post_banner && <VideoSlide baseUrl={baseUrl} post_banner={post_banner} />}
						</section>
						<section className="main-content__services">
							{Uslugi && <ServiceVideo Uslugi={Uslugi} baseUrl={baseUrl} />}
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

export default VidePage;
