import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionCollectionsPage = ({ postData }) => {
	const isHomepage = location.pathname === '/';
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);


	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.service-description__title',
				'.service-description__title',
				'.service-description__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();
		}
	}, [location.pathname, isHomepage]);


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