import React from 'react';
import { createRoot } from 'react-dom/client';
import EventsAnimatorsPage from '../../Router/events/EventsAnimatorsPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsAnimatorsPage />,
);
