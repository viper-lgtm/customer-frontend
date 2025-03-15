import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username || !password) {
            setError('Uživatelské jméno a heslo jsou povinné.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/customer/login', {
                username,
                password
            });

            console.log('Úspěšně odesláno:', response.data);

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('user', JSON.stringify(response.data)); // Ukládáme user objekt do localStorage

            onLogin(response.data.username);
            navigate('/profile');

        } catch (error) {
            console.error('Chyba odesílání:', error);
            if (error.response) {
                if (error.response.status === 401) {
                    setError('Neplatné uživatelské jméno nebo heslo.');
                } else if (error.response.status === 404) {
                    setError('Uživatel nebyl nalezen.');
                } else {
                    setError(error.response.data.message || 'Chyba přihlášení.');
                }
            } else {
                setError('Chyba přihlášení. Zkuste to prosím znovu.');
            }
        }
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <h2>Přihlášení</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Uživatelské jméno"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Heslo"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Přihlásit</button>
                </form>
                <Link to="/signup">
                    <button>Přejít na registraci</button>
                </Link>
                <br />
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Login;