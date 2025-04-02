import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollSmoother} from 'gsap/ScrollSmoother';

import returnToSavedPosition from '../../modules/return-position.js';
import {applyParallax} from '../../animations/animations.jsx';

import {Header} from '../../components/layouts/Header.jsx';
import {ServiceProducts} from '../../components/categories/ServiceProducts.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';
import axios from 'axios';
import Seo from '../../Seo.jsx';
import loaded from '../../assets/preloader.js';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '.';

function ProductsPage() {
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
			.get('https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/562')
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
					sessionStorage.setItem('products', JSON.stringify(response.data.acf.products));
				} else {
					alert('Post data not found or empty array.');
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				alert('Error fetching post:', error);
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
						<section className="main-content__services">
							<ServiceProducts baseUrl={baseUrl} />
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
		</>
	);
}

export default ProductsPage;
