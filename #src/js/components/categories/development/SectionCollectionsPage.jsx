import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionCollectionsPage = ({ postData }) => {
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
		}
	}, [postData, isMobile]);


	const postContent = postData ? postData.content.rendered : null;
	return (
		<>
			{ postContent && <div dangerouslySetInnerHTML={{__html: postContent}}/> }
		</>
	);
};

SectionCollectionsPage.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};