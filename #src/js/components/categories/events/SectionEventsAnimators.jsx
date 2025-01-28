import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionEventsAnimators = ({ postData }) => {
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


			const targetElements = document.querySelectorAll(".service-description__content");

			let targetElement;
			if (postData.id === 358) {
				targetElement = targetElements[1]; // Ikkinchi element
			} else {
				targetElement = targetElements[0]; // Birinchi element
			}

			if (targetElement) {
				// Yangi HTML elementni yaratish
				const newDiv = document.createElement("div");
				newDiv.className = "service-description__button _open-button";
				newDiv.style.transform = "translateY(0px)";
				newDiv.style.opacity = "1";
				newDiv.style.display = "flex";

				const button = document.createElement("button");
				button.className = "order-button btn-grad";
				button.type = "button";

				const span = document.createElement("span");
				span.textContent = "оставить заявку";

				// Elementlarni o‘zaro bog‘lash
				button.appendChild(span);
				newDiv.appendChild(button);

				// Yaratilgan elementni target elementning ichiga joylash
				targetElement.appendChild(newDiv);
			} else {
				console.warn('Element with class "service-description__content" not found.');
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
