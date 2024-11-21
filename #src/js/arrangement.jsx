import React from 'react';
import { createRoot } from 'react-dom/client';
import ArrangementPage from './Router/ArrangementPage.jsx';

createRoot(document.querySelector('.page')).render(
	<ArrangementPage />,
);
