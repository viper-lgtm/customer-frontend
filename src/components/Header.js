import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = ({ isLoggedIn, username, onSignOut }) => {
    return (
        <header>
            {/* ... logo, navigace ... */}
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <>
                        <span>{username}</span>
                        <button onClick={onSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/signup"><button>Sign Up</button></Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;