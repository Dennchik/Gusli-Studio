import React from 'react';
import { createRoot } from 'react-dom/client';
//* ---------------------------- Components-------------------------------------
import { Header } from '../layouts/Header.jsx';
import { Achievements } from '../components/Achievements.jsx';
import { Footer } from '../layouts/Footer.jsx';
import { About } from '../components/About.jsx';
import { MenuFloat } from '../layouts/Menu-float.jsx';
import { Partners } from '../components/Partners.jsx';
//* ----------------------------------------------------------------------------
const baseUrl = '..';
//* ---------------------------- About -----------------------------------------
/**
 * Компонент Header.
 * @param {{ baseUrl: string }} props - Объект пропсов.
 */
// const isRoot = window.location.pathname === '/' ||
// window.location.pathname.match(/^\/[^/]*$/); const baseUrl = isRoot ? '.' :
// '..'; console.log(baseUrl);
createRoot(document.querySelector('.page__header')).render(
	<Header baseUrl={baseUrl} />);
//* ------------------------------ About ---------------------------------------
createRoot(document.querySelector('.main-content__about')).render(
	<About baseUrl={baseUrl} />);
//* ------------------------------ Partners ------------------------------------
// createRoot(document.querySelector('.main-content__partners')).render(
// 	<Partners baseUrl={baseUrl} />,
// );
//* ------------------------------ Partners ------------------------------------
// createRoot(document.querySelector('.main-content__partners')).render(
// 	<Achievements baseUrl={baseUrl} />,
// );
//* ------------------------------ Footer --------------------------------------
createRoot(document.querySelector('.main-content__footer')).render(
	<Footer baseUrl={baseUrl} isHomePage={false} />);
//* ------------------------------ MenuFloat -----------------------------------
createRoot(document.querySelector('.page__menu-float')).render(
	<MenuFloat baseUrl={baseUrl} />);
//* ----------------------------------------------------------------------------