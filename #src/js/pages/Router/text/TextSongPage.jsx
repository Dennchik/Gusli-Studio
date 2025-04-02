import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {Offer} from '../../../components/chunks/Offer.jsx';

import returnToSavedPosition from '../../../modules/return-position.js';
import {applyParallax} from '../../../animations/animations.jsx';

import {Header} from '../../../components/layouts/Header.jsx';
import {Footer} from '../../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../../components/layouts/Menu-float.jsx';
import {FormModal} from '../../../components/layouts/FormModal.jsx';
import axios from 'axios';
import Seo from '../../../Seo.jsx';
import {SectionCollectionsPage} from '../../../components/categories/development/SectionCollectionsPage.jsx';
import loaded from '../../../assets/preloader.js';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '../..';

function TextSongPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(
		() => {
			if (!isMobile) {
				const smoother = ScrollSmoother.create({
					wrapper: '#wrapper',
					content: '#content',
					smooth: 1.5,
					effects: true,
					smoothTouch: 0.1,
				});
				return () => {
					smoother.kill();
				};
			}
		},
	);

	useEffect(() => {
		if (!isMobile) {
			applyParallax('.material-parallax');
		}
		returnToSavedPosition();
		if (!postData){
			loaded('.preloader');
		}
	}, [postData]);
	const [postData, setPost] = useState(null);
	useEffect(() => {
		axios
			.get(
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/236'
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
	return (
		<>
			{seoData && <Seo seoData={seoData} />}
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__body">
							<SectionCollectionsPage baseUrl={baseUrl} isHomePage={true} postData={postData} />
						</section>
						<section className="main-content__offer gradient-neon-color">
							<Offer baseUrl={baseUrl} page={'text'}/>
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

export default TextSongPage;