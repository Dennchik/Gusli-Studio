import React from 'react';
import { createRoot } from 'react-dom/client';
import DevelopmentPage from './Router/DevelopmentPage.jsx';

createRoot(document.querySelector('.page')).render(
	<DevelopmentPage />,
);
