import React from 'react';
import '../backgrounds/Background1.css';
import Background1 from './Background1';
import Background2 from './Background2';
import Background3 from './Background3';
import Object1 from './Object1';
import Object2 from './Object2';
import Object3 from './Object3';
// import Object4 from './Object4';
// import Object5 from './Object5';
// import Object6 from './Object6';
// import Object7 from './Object7';
// import Object8 from './Object8';

const ParallaxContainer = () => {
    return (
        <div className="parallax-container">
            <Background1 />
            <Object1 />
            <Background2 />
            <Object2 />
            <Background3 />
            <Object3 />
            {/*<Object4 />*/}
            {/*<Object5 />*/}
            {/*<Object6 />*/}
            {/*<Object7 />*/}
            {/*<Object8 />*/}


        </div>
    );
};

export default ParallaxContainer;
