import React from 'react';
import { createRoot } from 'react-dom/client';
import RecordingPage from './Router/RecordingPage.jsx';

createRoot(document.querySelector('.page')).render(
	<RecordingPage />,
);
