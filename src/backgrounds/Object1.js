import React, { useState, useEffect } from 'react';
import '../backgrounds/Object.css';
const Object1 = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="object1"
            style={{ transform: `translateY(${offset * 0.3}px)` }}
        >
           <h1>Hey its me</h1>
        </div>
    );
};

export default Object1;
