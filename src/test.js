import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import logo from './logo.svg';
import About from './pages/About';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    return (
        <ParallaxProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Parallax y={[-20, 20]}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </Parallax>
                        <Parallax y={[-40, 40]}>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                        </Parallax>
                        <Container>
                            <Parallax y={[-60, 60]}>
                                <h1>Hello, world!</h1>
                            </Parallax>
                            <Parallax y={[-80, 80]}>
                                <Button variant="primary" onClick={() => navigate('/about')}>
                                    Click me
                                </Button>
                            </Parallax>
                        </Container>
                    </header>
                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </ParallaxProvider>
    );
}

export default App;

useNavigate() may be used only in the context of a <Router> component.