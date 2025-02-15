import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedUsername = localStorage.getItem('username');

        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);
            setUsername(storedUsername || ''); // fallback pro případ, že username není uložen
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('isLoggedIn'); // Odstraníme informaci o přihlášení
        localStorage.removeItem('username');   // Odstraníme username
        setIsLoggedIn(false);                 // Aktualizujeme stav
        setUsername('');                     // Aktualizujeme username
        navigate('/');                       // Přesměrujeme na homepage
    };

    return (
        <header>
            {/* ... logo, navigace ... */}
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <>
                        <span>{username}</span>
                        <button onClick={handleSignOut}>Sign out</button>
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