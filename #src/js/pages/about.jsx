import React from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './Router/AboutPage.jsx';

createRoot(document.querySelector('.page')).render(
	<AboutPage />,
);
