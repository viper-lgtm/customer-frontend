import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Customer from './pages/Customer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Profile from './pages/Profile';
import Header from './components/Header';


function App() {

    return (
        <Router>
            <div className='App'>
            <Header /> {/* Vložení Header komponenty ZDE */}
                <Routes>
                    <Route path="/" element={<Home />} exact /> 
                    <Route path="/aboutme" element={<Aboutme />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/registration-success" element={<RegistrationSuccess />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );

    // const [customers, setCustomers] = useState(); // Initialize to null


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get("http://localhost:8080/customer");
    //             console.log("Response data:", response.data);
    //             // const elements = response.data.map((customer) => { return <Customer name={customer} /> })
    //             const elements = response.data.map((customer, index) => (
    //                 <Customer key={index} customer={customer} /> // Use index as key (less ideal)
    //             ));
    //             setCustomers(elements)
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             // Set to empty array to avoid null errors during render
    //             setCustomers([])  // Or display an error message
    //         }
    //     }
    //     fetchData()
    // }, []);

    // if (customers === null) {  // Important: Handle loading state
    //     return <div>Loading...</div>;
    // }

    // return (
    //     <div className='App'>
    //         {customers}
    //     </div>
    // );

    // return(
    //     <div className='container'>
    //         <Routes>
    //             <Route path="/signup" element={<Signup/>}>Hello</Route>
    //         </Routes>
    //         <p style={color:"black"}>hello</p>
    //     </div>
    // )

}

export default App;