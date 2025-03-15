import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <h1>Vítejte na hlavní stránce!</h1>
            <div className='link-item'>
                <Link to="/aboutme">About me</Link>
            </div>
            <div className='link-item'>
                <Link to="/customer">Go to Customer Page</Link>
            </div>
        </div>
    );
};

export default Home;