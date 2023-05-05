import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Parallax y={[-200, 20]}>
                <h1 className="text-white">Welcome to my landing page</h1>
            </Parallax>
            <Parallax y={[-40, 40]}>
                <p className="text-white">
                    This is a demo landing page with a full-screen responsive background of computer technology.
                </p>
            </Parallax>
            <Parallax y={[-60, 60]}>
                <Button variant="primary" onClick={() => navigate('/about')}>
                    Learn more
                </Button>
            </Parallax>
        </Container>
    );
};

export default LandingPage;
