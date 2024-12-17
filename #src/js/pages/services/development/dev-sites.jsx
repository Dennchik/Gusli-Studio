import React from 'react';
import { createRoot } from 'react-dom/client';
import DevSitesPage from '../../Router/development/DevSitesPage.jsx';

createRoot(document.querySelector('.page')).render(
	<DevSitesPage />,
);
