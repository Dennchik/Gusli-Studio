import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

export const SectionVoiceActing = ({ postData }) => {
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
				element.setAttribute(
					"href",
					"https://wp-api.gusli-studio.ru/wp-content/uploads/2025/01/pr-do.pdf"
				);

				// URL boshqa sahifada ochilishi uchun target atributini o'rnatish
				element.setAttribute("target", "_blank");

				// rel atributini xavfsizlik uchun o'rnatish
				element.setAttribute("rel", "noreferrer noopener");
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
