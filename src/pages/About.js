import React from 'react';

import '../pages/AboutPage.css';
import backgroundImage from '../images/about.jpg';



function AboutPage() {
    return (
        <div className="home-page-container">
            <div class="parallax">
                    <img src={backgroundImage} alt="" className="parallax__background" />
                    <div class="parallax__content">
                        <h1 class="parallax__heading">Good IT Guy</h1>
                        <h2 class="parallax__subheading">About Me</h2>
                    </div>
            </div>

            <p>This is the ABOUT page.</p>
            </div>

    );
}

export default AboutPage;
