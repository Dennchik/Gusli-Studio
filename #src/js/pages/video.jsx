import React from 'react';
import { createRoot } from 'react-dom/client';
import VidePage from './Router/VidePage.jsx';

createRoot(document.querySelector('.page')).render(
	<VidePage />,
);