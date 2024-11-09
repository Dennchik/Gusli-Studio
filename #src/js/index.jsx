import React from 'react';
import { createRoot } from 'react-dom/client';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
import HomePage from './Router/HomePage.jsx';

createRoot(document.querySelector('.page')).render(
	<HomePage />,
);
