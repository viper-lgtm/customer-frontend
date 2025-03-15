import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
    return (
        <div className='container'>
            <h1>O mně</h1>
            <p>
                Ahoj, jsem Marty, Java Developer.
            </p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Aboutme;