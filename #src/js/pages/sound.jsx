import React from 'react';
import { createRoot } from 'react-dom/client';
import SoundPage from '../Router/SoundPage.jsx';

createRoot(document.querySelector('.page')).render(
	<SoundPage />,
);