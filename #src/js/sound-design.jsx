import React from 'react';
import { createRoot } from 'react-dom/client';
import SoundDesignPage from './Router/SoundDesignPage.jsx';

createRoot(document.querySelector('.page')).render(
	<SoundDesignPage />,
);
