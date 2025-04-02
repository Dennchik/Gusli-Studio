import React, { useCallback, useEffect, useRef, useState } from 'react';
//* ----------------------------------------------------------------------------
export const About = ({post_banner}) => {
	const [isContentExpanded, setIsContentExpanded] = useState(
		window.innerWidth > 920);
	const toggleButtonRef = useRef(null);
	const textBlockRef = useRef(null);
	const hideBoxRef = useRef(null);

	const handleToggleClick = useCallback(() => {
		setIsContentExpanded(prevState => !prevState);
	}, []);

	useEffect(() => {
		const toggleButton = toggleButtonRef.current;

		if (toggleButton) {
			if (!isContentExpanded) {
				toggleButton.classList.add('hidden');
			} else {
				toggleButton.classList.remove('hidden');
			}
		}
	}, [isContentExpanded]);

	useEffect(() => {
		const toggleButton = toggleButtonRef.current;
		const textBlock = textBlockRef.current;
		const hideBox = hideBoxRef.current;

		if (toggleButton) {
			toggleButton.addEventListener('click', handleToggleClick);
		}

		if (textBlock && hideBox) {
			if (!isContentExpanded) {
				textBlock.classList.remove('hidden');
				hideBox.classList.remove('hidden');
			} else {
				textBlock.classList.add('hidden');
				hideBox.classList.add('hidden');
			}
		}
	}, [handleToggleClick, isContentExpanded]);

	const handleResize = useCallback(() => {
		setIsContentExpanded(window.innerWidth > 920);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);


	return (
		<div className="about">
			<div className="material-parallax parallax">
				<div className="parallax__image">
					<picture>
						<img className='parallax__image bg'
							 src={post_banner.img} alt="image" />
					</picture>
				</div>
			</div>
			<div className="about__container">
				<div className="content-body about__content">
					<div className="content-body__column">
						<h1 className="content-body__title h1_01901">
							{post_banner.title}
						</h1>
						<div ref={textBlockRef} className="content-body__text">
							<p>
								{post_banner.desc1}
								<span ref={toggleButtonRef} className="content-body__icon">
									<i className="content-body__ellipsis"></i>
								</span>
							</p>
							<div ref={hideBoxRef} className="content-body__hide-box">
								<div className="content-body__wrapper">
									<span>
										{post_banner.desc2}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};