import React from 'react';
import { createRoot } from 'react-dom/client';
import ServicesPage from '../Router/ServicesPage.jsx';

createRoot(document.querySelector('.page')).render(
	<ServicesPage />,
);
