import React from 'react';
import { createRoot } from 'react-dom/client';
import TextPage from './Router/TextPage.jsx';

createRoot(document.querySelector('.page')).render(
	<TextPage />,
);