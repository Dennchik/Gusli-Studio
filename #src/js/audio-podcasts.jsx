import React from 'react';
import { createRoot } from 'react-dom/client';
import AudioPodcastsPage from './Router/AudioPodcastsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<AudioPodcastsPage />,
);
