import React from 'react';
import {createRoot} from 'react-dom/client';
import EventsLeaderPage from '../../Router/events/EventsLeaderPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsLeaderPage />,
);
