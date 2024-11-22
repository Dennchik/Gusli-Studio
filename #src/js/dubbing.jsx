import React from 'react';
import { createRoot } from 'react-dom/client';
import DubbingPage from './Router/DubbingPage.jsx';

createRoot(document.querySelector('.page')).render(
	<DubbingPage />,
);
