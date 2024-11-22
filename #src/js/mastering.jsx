import React from 'react';
import { createRoot } from 'react-dom/client';
import MasteringPage from './Router/MasteringPage.jsx';

createRoot(document.querySelector('.page')).render(
	<MasteringPage />,
);
