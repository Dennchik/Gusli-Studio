import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from './pages/Router/HomePage.jsx'; // Bosh sahifa
import AboutPage from './pages/Router/AboutPage.jsx'; // Haqida sahifa

function App() {
    return (
        <Router>
            <Helmet>
                {/* Global SEO sozlamalari */}
                <title>Gusli Studio</title>
                <meta name="description" content="Gusli Studio - Siz uchun eng yaxshi xizmatlar" />
                <meta name="keywords" content="Gusli Studio, xizmatlar, media" />
            </Helmet>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
