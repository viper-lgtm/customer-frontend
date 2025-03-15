import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import komponenty Link

const RegistrationResult = () => {

    const location = useLocation();
    const success = location.state?.success;

    return (
        <div>
            {/* >>>>> ZMĚNA: Podmíněné zobrazení na základě success <<<<< */}
            {success ? (
                <div>
                    <h1>Registrace proběhla úspěšně!</h1>
                    <p>Děkujeme za registraci. Nyní se můžete přihlásit.</p>
                    <Link to="/login">Přejít na přihlášení</Link>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Registrace se nezdařila!</h1>
                    <p>Omlouváme se, registrace se nezdařila. Zkuste to prosím znovu.</p>
                    <Link to="/signup">Zkusit registraci znovu</Link>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationResult;