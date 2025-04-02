import React from 'react';
import {createRoot} from 'react-dom/client';
import EventsPage from './Router/EventsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsPage />,
);