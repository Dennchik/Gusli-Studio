import React from 'react';
import { createRoot } from 'react-dom/client';

import { MainSlide } from '../components/MainSlide.jsx';
import { MenuFloat } from '../layouts/Menu-float.jsx';
import { Services } from '../components/Services.jsx';
import { Footer } from '../layouts/Footer.jsx';
//* ------------------------------ Components ----------------------------------
import { Header } from '../layouts/Header.jsx';

const baseUrl = '.';
//* ------------------------------ Header --------------------------------------
createRoot(document.querySelector('.page__header')).render(
	<Header baseUrl={baseUrl} />,
);
//* ------------------------------ Main slide ----------------------------------
createRoot(document.querySelector('.main-content__slide')).render(
	<MainSlide baseUrl={baseUrl} />,
);
//* ------------------------------ Services ------------------------------------
createRoot(document.querySelector('.main-content__services')).render(
	<Services baseUrl={baseUrl} />,);
// * ------------------------------ Footer -------------------------------------
createRoot(document.querySelector('.main-content__footer')).render(<Footer
	baseUrl={baseUrl} isHomePage={true} />,);
// * ------------------------------ MenuFloat ----------------------------------
createRoot(document.querySelector('.page__menu-float')).render(
	<MenuFloat baseUrl={baseUrl} />,);
//* ----------------------------------------------------------------------------
