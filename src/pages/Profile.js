import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onSignOut }) => { // Přijímáme onSignOut jako prop
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log('storedUser:', storedUser); // Přidáno logování storedUser

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            console.log('user:', user); // Přidáno logování user

        }
    }, []);

    const handleSignOutProfile = () => { // Vytvoříme funkci pro Profile.js
        onSignOut(); // Zavoláme onSignOut prop (funkci z App.js)
        navigate('/', { replace: true });
    };

    if (!user) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className='container'>
            <h2>Welcome, {user.firstName}!</h2>
            <p>Email: {user.email}</p>
            <button onClick={handleSignOutProfile}>Sign Out</button> {/* Používáme handleSignOutProfile */}
        </div>
    );
};

export default Profile;