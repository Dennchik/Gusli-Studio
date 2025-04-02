import React from 'react';
import {createRoot} from 'react-dom/client';
import DistributionPage from '../../Router/sound/DistributionPage.jsx';

createRoot(document.querySelector('.page')).render(
	<DistributionPage />,
);