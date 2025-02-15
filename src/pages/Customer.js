import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link in Customer.js

export default function Customer() {
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8080/customer");
                console.log("Response data:", response.data);

                setCustomers(response.data); // Set the raw data
            } catch (error) {
                console.error("Error fetching data:", error);
                setCustomers([]);
            }
        }
        fetchData();
    }, []);

    if (customers === null) {
        return <div>Loading...</div>;
    }

    if (customers.length === 0) {
        return <div>No customers found.</div>;
    }

    return (
        <div style={{ width: "100%", background: "lightgray", color: "black", padding: "20px" }}> {/* Added some styling */}
            <Link to="/">Go to Home Page</Link> {/* Link back to / */}
            {/* Displaying the data (two options) */}
            {/* Option 1: List */}
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}> {/* Make sure customer has an id property */}
                        {customer.firstName} {customer.lastName} - {customer.address} - {customer.email} - {customer.phone}
                    </li>
                ))}
            </ul>

            {/* Option 2: Table */}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}> {/* Make sure customer has an id property */}
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// export default function Customer({ customer }) { // Destructure the prop
//     if (!customer) { // Handle cases where customer might be null or undefined
//         return <div>Loading...</div>; // Or return null, or a placeholder
//     }

//     return (
//         <div style={{ width: "100px", height: "100px", background: "black", color: "white" }}>
//             {customer.firstName} {customer.lastName}
//         </div>
//     );
// }



// function Customer() {
//     const [customers, setCustomers] = useState(null); // Initialize to null

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get("http://localhost:8080/customer");
//                 console.log("Response data:", response.data);
//                 setCustomers(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 // Set to empty array to avoid null errors during render
//                 setCustomers([]);  // Or display an error message
//             }
//         }
//         fetchData();
//     }, []);

//     if (customers === null) {  // Loading state
//         return <div>Loading customers...</div>;
//     }

//     if (customers.length === 0) { // Empty state or error
//         return <div>No customers found.</div>; // Or display an error message
//     }

//     return (
//         <div className='App'>
//             <ul>
//                 {customers.map(customer => (
//                     <li key={customer.id}>
//                         {customer.firstName}{" "}
//                         {customer.lastName}{" "}
//                         - {customer.address}{" "}
//                         - {customer.email}{" "}
//                         - {customer.phone}
//                     </li>
//                 ))}
//             </ul>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Address</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {customers.map(customer => (
//                         <tr key={customer.id}>
//                             <td>{customer.firstName}</td>
//                             <td>{customer.lastName}</td>
//                             <td>{customer.address}</td>
//                             <td>{customer.email}</td>
//                             <td>{customer.phone}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Customer;