import React from 'react';
import { createRoot } from 'react-dom/client';
import DevBookletsPage from '../../Router/development/DevBookletsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<DevBookletsPage />,
);
