import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asosiy React komponenti
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
// loaded('.preloader');
// React ilovasini yuklash
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
