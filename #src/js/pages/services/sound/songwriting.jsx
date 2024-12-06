import React from 'react';
import { createRoot } from 'react-dom/client';
import SongWritingPage from '../../Router/sound/SongWritingPage.jsx';

createRoot(document.querySelector('.page')).render(
	<SongWritingPage />,
);
