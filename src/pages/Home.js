import React from 'react';
import '../pages/HomePage.css';
import backgroundImage from '../images/background.jpg';

function HomePage() {
    return (
        <div className="home-page-container">
            <div class="parallax">
                <img src={backgroundImage} alt="" className="parallax__background" />
                <div class="parallax__content">
                    <h1 class="parallax__heading">Good IT Guy</h1>
                    <h2 class="parallax__subheading">About Me</h2>
                </div>
            </div>

            <p>This is the Home page.</p>
        </div>
    );
}

export default HomePage;