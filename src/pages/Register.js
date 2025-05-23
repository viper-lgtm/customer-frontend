// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios'; // Import axios pro HTTP požadavky
// import '../css/Register.css';

// export default function Register() {
//     // const [firstName, setFirstName] = useState('');
//     // const [lastName, setLastName] = useState('');
//     // const [address, setAddress] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [phone, setPhone] = useState('');
//     // const [userName, setUsername] = useState('')
//     // const [password, setPassword] = useState('')

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         email: '',
//         phone: '',
//         username: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//     const handleSubmit = async (e) => { // Async funkce
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:8080/customer/save', formData); // Odesíláme formData objekt
//             console.log('Úspěšně odesláno:', response.data);
//             navigate('/registration-success');

//         } catch (error) {
//             console.error('Chyba odesílání:', error);
//             // Zde můžete zobrazit uživateli chybovou hlášku (např. pomocí alert nebo zobrazením chyby ve stavu komponenty)
//             if (error.response) {
//                 console.error("Chyba serveru:", error.response.data); // Podrobnější informace o chybě ze serveru
//                 alert("Registrace se nezdařila. Zkuste to prosím znovu. " + error.response.data.message); // Zobrazíme zprávu ze serveru
//             } else if (error.request) {
//                 console.error("Chyba požadavku:", error.request);
//                 alert("Chyba požadavku. Zkuste to prosím znovu.");
//             } else {
//                 console.error("Chyba:", error.message);
//                 alert("Registrace se nezdařila. Zkuste to prosím znovu.");
//             }
//         }

//         // try {
//         //     const response = await axios.post('http://localhost:8080/customer/save', { // POST požadavek na /api/customers
//         //         firstName,
//         //         lastName,
//         //         address,
//         //         email,
//         //         phone,
//         //         userName,
//         //         password
//         //     });

//         //     console.log('Úspěšně odesláno:', response.data);
//         //     navigate('/registration-success'); // Přesměrování po úspěšné registraci

//         // } catch (error) {
//         //     console.error('Chyba odesílání:', error);
//         //     // Zde můžete zobrazit uživateli chybovou hlášku
//         // }
//     };

//     return (
//         <div className='wrapper'>
//             <div className='form-container'>
//                 <h2>Registrace nového uživatele</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="firstName" // Důležité: Přidat name atribut
//                         placeholder="Jméno"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         // required  // Zakomentováno dle potřeby
//                     />
//                     <input
//                         type="text"
//                         name="lastName" // Důležité: Přidat name atribut
//                         placeholder="Příjmení"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         // required
//                     />
//                     <input
//                         type="text"
//                         name="address" // Důležité: Přidat name atribut
//                         placeholder="Adresa"
//                         value={formData.address}
//                         onChange={handleChange}
//                         // required
//                     />
//                     <input
//                         type="email"
//                         name="email" // Důležité: Přidat name atribut
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         // required
//                     />
//                     <input
//                         type="text"
//                         name="phone" // Důležité: Přidat name atribut
//                         placeholder="Telefon"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         // required
//                     />
//                     <input
//                         type="text"
//                         name="userName"  // Důležité: Přidat name atribut
//                         placeholder="Uživatelské jméno"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"  // Důležité: Přidat name atribut
//                         placeholder="Heslo"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />

//                     <button type="submit">Registrovat</button>
//                 </form>
//                 <div>
//                     <Link to="/">Home</Link>
//                 </div>
//             </div>
//         </div>
//     );

//     // return (
//     //     <div className='wrapper'>
//     //         <div className='form-container'>
//     //             <h2>Registrace nového uživatele</h2>
//     //             <form onSubmit={handleSubmit}>
//     //                 <input
//     //                     type="text"
//     //                     placeholder="Jméno"
//     //                     value={firstName}
//     //                     onChange={(e) => setFirstName(e.target.value)}
//     //                     // required
//     //                 />
//     //                 <input
//     //                     type="text"
//     //                     placeholder="Příjmení"
//     //                     value={lastName}
//     //                     onChange={(e) => setLastName(e.target.value)}
//     //                     // required
//     //                 />
//     //                 <input
//     //                     type="text"
//     //                     placeholder="Adresa"
//     //                     value={address}
//     //                     onChange={(e) => setAddress(e.target.value)}
//     //                     // required
//     //                 />
//     //                 <input
//     //                     type="email"
//     //                     placeholder="Email"
//     //                     value={email}
//     //                     onChange={(e) => setEmail(e.target.value)}
//     //                     // required
//     //                 />
//     //                 <input
//     //                     type="text"
//     //                     placeholder="Telefon"
//     //                     value={phone}
//     //                     onChange={(e) => setPhone(e.target.value)}
//     //                     // required
//     //                 />
//     //                 <input
//     //                     type="text"
//     //                     placeholder="Uživatelské jméno"
//     //                     value={userName}
//     //                     onChange={(e) => setUsername(e.target.value)}
//     //                     required
//     //                 />
//     //                 <input
//     //                     type="password"
//     //                     placeholder="Heslo"
//     //                     value={password}
//     //                     onChange={(e) => setPassword(e.target.value)}
//     //                     required
//     //                 />

//     //                 <button type="submit">Registrovat</button>
//     //             </form>
//     //             <div>
//     //                 <Link to="/">Home</Link>
//     //             </div>
//     //         </div>
//     //     </div>
//     // );
// }