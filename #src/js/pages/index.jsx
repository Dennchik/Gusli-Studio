import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './Router/HomePage.jsx';

createRoot(document.querySelector('.page')).render(
	<HomePage />,
);
