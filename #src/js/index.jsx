import React from 'react';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createRoot } from 'react-dom/client';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
import HomePage from './Router/HomePage.jsx';


createRoot(document.querySelector('.page')).render(
	<HomePage />,
);
