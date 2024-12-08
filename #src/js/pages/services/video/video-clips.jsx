import React from 'react';
import { createRoot } from 'react-dom/client';
import VideoClipsPage from '../../Router/video/VideoClipsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<VideoClipsPage />,
);
