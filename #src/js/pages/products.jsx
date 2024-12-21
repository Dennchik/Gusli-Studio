import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductsPage from './Router/ProductsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<ProductsPage />,
);