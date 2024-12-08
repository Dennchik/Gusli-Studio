import React from 'react';
import { createRoot } from 'react-dom/client';
import VideoPresentationPage
	from '../../Router/video/VideoPresentationPage.jsx';

createRoot(document.querySelector('.page')).render(
	<VideoPresentationPage />,
);
