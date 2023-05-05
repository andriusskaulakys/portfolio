import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <ParallaxProvider>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </ParallaxProvider>,
    document.getElementById('root')
);
