import React from 'react';
import { Link } from 'react-router-dom'; // Import komponenty Link

const RegistrationSuccess = () => {
    return (
        <div>
            <h1>Registrace proběhla úspěšně!</h1>
            <p>Děkujeme za registraci. Nyní se můžete přihlásit.</p>
            {/* Odkaz na přihlašovací stránku */}
            <Link to="/signup">Přejít na přihlášení</Link> 
        </div>
    );
};

export default RegistrationSuccess;