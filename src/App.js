import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Customer from './pages/Customer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RegistrationResult from './pages/RegistrationResult';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedUsername = localStorage.getItem('username');
        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);
            setUsername(storedUsername || '');
        }
    }, []);

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    const handleSignOut = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <Router>
            <div className='App'>
            <Header isLoggedIn={isLoggedIn} username={username} onSignOut={handleSignOut} />
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/aboutme" element={<Aboutme />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/registration-result" element={<RegistrationResult />} />
                        <Route
                            path="/profile"
                            element={isLoggedIn ? <Profile onSignOut={handleSignOut} /> : <Navigate to="/" />}
                        />
                    </Routes>
                </div>
        </Router>
    );
}

export default App;