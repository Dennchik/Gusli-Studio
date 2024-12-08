import React from 'react';
import { createRoot } from 'react-dom/client';
import VideoPodcastsPage from '../../Router/video/VideoPodcastsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<VideoPodcastsPage />,
);
