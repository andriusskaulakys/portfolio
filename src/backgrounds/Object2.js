import React, { useState, useEffect } from 'react';
import '../backgrounds/Object.css';
const Object2 = () => {
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
            className="object2"
            style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
            <h1>Do you know who I'm </h1>
        </div>
    );
};

export default Object2;
