import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); // Prázdné pole jako druhý argument useEffect zajistí, že se kód spustí jen jednou po načtení komponenty

    if (!user) {
        return <div>Načítání profilu...</div>; // Zobrazíme zprávu, dokud se data nenačtou
    }

    return (
        <div>
            <h2>Vítejte, {user.firstName}!</h2> {/* Zobrazíme jméno uživatele */}
            <p>Email: {user.email}</p> {/* A další údaje */}
            {/* ... další informace o uživateli ... */}
            <Link to="/">Home</Link>
        </div>
    );
};

export default Profile;