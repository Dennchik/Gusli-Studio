import React from 'react';
import { createRoot } from 'react-dom/client';
import CreateCollectionsPage
	from '../../Router/development/CreateCollectionsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<CreateCollectionsPage />,
);
