import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => { // Async funkce
        e.preventDefault();
        setError(null); // Smažeme předchozí chyby

        try {
            const response = await axios.post('http://localhost:8080/customer/login', {
                username,
                password
            });

            console.log('Úspěšně odesláno:', response.data);
            // localStorage.setItem('token', response.data.token); // Uložení tokenu (pokud backend vrací)
            localStorage.setItem('user', JSON.stringify(response.data)); // Uložíme data o uživateli
            localStorage.setItem('isLoggedIn', 'true'); // Uložíme informaci o přihlášení


            navigate('/profile'); // Přesměrování po přihlášení

        } catch (error) {
            console.error('Chyba odesílání:', error);
            if (error.response) {
                setError(error.response.data.message || 'Chyba přihlášení'); // Zobrazení zprávy ze serveru
            } else {
                setError('Chyba přihlášení. Zkuste to prosím znovu.');
            }
        }
    };

    return (
        <div>
            <h2>Přihlášení</h2>
            <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Zobrazení chybové hlášky ZDE */}
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
            <Link to="/register">
                <button>Přejít na registraci</button>
            </Link>
            <br></br>
            <Link to="/">Home</Link>
        </div>
    );
}