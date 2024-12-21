import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
//* ----------------------------------------------------------------------------
export const About = () => {
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
						{isWebpSupported()
							? <img className='parallax__image bg'
								src={'img/about/ab-img-01.webp'} alt="image" />
							: <img className='parallax__image bg'
								src={'img/about/ab-img-01.png'} alt="image" />}
					</picture>
				</div>
			</div>
			<div className="about__container">
				<div className="content-body about__content">
					<div className="content-body__column">
						<h1 className="content-body__title h1_01901">В нашей студии:</h1>
						<div ref={textBlockRef} className="content-body__text">
							<p>- описав свой проект, Вы&nbsp;получаете уникальные
								предложения от&nbsp;ведущих профессионалов. Наймите именно
								того&nbsp;специалиста, который идеально подходит
								для&nbsp;воплощения вашей музыкальной идеи!
								<span ref={toggleButtonRef} className="content-body__icon">
									<i className="content-body__ellipsis"></i>
								</span>
							</p>
							<div ref={hideBoxRef} className="content-body__hide-box">
								<div className="content-body__wrapper">
									<span>- мы понимаем, что&nbsp;талант без&nbsp;правильного
										оборудования может оставаться скрытым. Именно поэтому
										мы&nbsp;предлагаем все&nbsp; необходимое для&nbsp;раскрытия
										вашего потенциала.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};