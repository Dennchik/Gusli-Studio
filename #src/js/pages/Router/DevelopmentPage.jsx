import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import React, {useEffect, useState} from 'react';
import {applyParallax} from '../../animations/animations.jsx';
import {ServiceDevelopment} from '../../components/categories/ServiceDevelopment.jsx';
import {Footer} from '../../components/layouts/Footer.jsx';
import {FormModal} from '../../components/layouts/FormModal.jsx';

import {Header} from '../../components/layouts/Header.jsx';
import {MenuFloat} from '../../components/layouts/Menu-float.jsx';

import returnToSavedPosition from '../../modules/return-position.js';
import loaded from '../../assets/preloader.js';
import axios from 'axios';
import Seo from '../../Seo.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '..';

function DevelopmentPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(
		() => {
			// create the smooth scroller FIRST!
			if (!isMobile) {// Убираем inline-стиль, если нужно
				// вернуть поведение по умолчанию
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
	useEffect(() => {
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
				'https://wp-api.gusli-studio.ru/wp-json/wp/v2/posts/498'
			)
			.then((response) => {
				console.log(response.data);
				if (response.data) {
					setPost(response.data);
					let storedData = JSON.parse(sessionStorage.getItem('offer')) || {};
					storedData['dev'] = response.data.acf.prays;
					sessionStorage.setItem('offer', JSON.stringify(storedData));
				} else {
					console.error('Post data not found or empty array.');
				}
			})
			.catch((error) => {
				console.error('Error fetching post:', error);
			});
	}, []);
	const seoData = postData ? postData.yoast_head_json : null;
	const Uslugi = postData ? postData.acf.uslugi : null;
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
							{Uslugi && <ServiceDevelopment baseUrl={baseUrl} Uslugi={Uslugi} />}
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

export default DevelopmentPage;
