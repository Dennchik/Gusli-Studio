import React from 'react';
import { createRoot } from 'react-dom/client';
import SessionMusiciansPage from './Router/SessionMusiciansPage.jsx';

createRoot(document.querySelector('.page')).render(
	<SessionMusiciansPage />,
);
