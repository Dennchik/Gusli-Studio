import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';
import {createRoot} from 'react-dom/client';

export const SectionMastering = ({ postData }) => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile && postData) {
			// Animatsiyani postData yuklanganidan keyin ishga tushirish
			animateTitles(
				'.service-description__title',
				'.service-description__title',
				'.service-description__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();

			// React `<Link />` komponentini joylashtirish
			const element = document.querySelector('.service-description__link'); // Elementni topamiz

			if (element) {
				const { textContent } = element; // Elementdagi matnni olamiz

				// React komponentini to'g'ridan-to'g'ri mavjud elementni qayta ishlashga majbur qilamiz
				const root = createRoot(element); // createRoot orqali React bog'laymiz
				root.render(
					<Link
						className="service-description__link"
						to="offer-container"
						duration={500}
						offset={-100}
						isDynamic={true}
						smooth="easeInQuad"
					>
						{textContent}
					</Link>
				);
			} else {
				console.warn('Element with class "service-description__link" not found.');
			}
		}
	}, [postData, isMobile]);



	const postContent = postData ? postData.content.rendered : null;
	return (
		<>
			{ postContent && <div dangerouslySetInnerHTML={{__html: postContent}}/> }
		</>
	);
};
