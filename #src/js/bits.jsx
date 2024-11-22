import React from 'react';
import { createRoot } from 'react-dom/client';
import BitsPage from './Router/BitsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<BitsPage />,
);