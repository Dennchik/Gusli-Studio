import React from 'react';
import {createRoot} from 'react-dom/client';
import EventsDjPage from '../../Router/events/EventsDjPage.jsx';

createRoot(document.querySelector('.page')).render(
	<EventsDjPage />,
);
