import React from 'react';
import { createRoot } from 'react-dom/client';
import EventsRentPage from '../../Router/events/EventsRentPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsRentPage />,
);
