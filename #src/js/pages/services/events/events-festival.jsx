import React from 'react';
import {createRoot} from 'react-dom/client';
import EventsFestivalPage from '../../Router/events/EventsFestivalPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsFestivalPage />,
);
