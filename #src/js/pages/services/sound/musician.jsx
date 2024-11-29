import React from 'react';
import { createRoot } from 'react-dom/client';
import MusicianPage from '../../Router/sound/MusicianPage.jsx';

createRoot(document.querySelector('.page')).render(
	<MusicianPage />,
);
