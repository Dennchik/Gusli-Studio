import React from 'react';
import { createRoot } from 'react-dom/client';
import VideoProductionPage from '../../Router/video/VideoProductionPage.jsx';

createRoot(document.querySelector('.page')).render(
	<VideoProductionPage />,
);
