// // src/components/ViandsList.js
// import React, { useState, useEffect } from 'react';
// import { getViands, addViand } from '../api';

// function ViandsList() {
//     const [viands, setViands] = useState([]);
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');

//     useEffect(() => {
//         async function fetchViands() {
//             const data = await getViands();
//             setViands(data);
//         }
//         fetchViands();
//     }, []);

//     const handleAddViand = async () => {
//         const newViand = await addViand(name, price);
//         setViands([...viands, newViand]);
//         setName('');
//         setPrice('');
//     };

//     return (
//         <div>
//             <h2>Available Viands</h2>
//             <ul>
//                 {viands.map((viand) => (
//                     <li key={viand.id}>{viand.name} - ₱{viand.price}</li>
//                 ))}
//             </ul>
//             <h3>Add a new viand</h3>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Viand name"
//             />
//             <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder="Price"
//             />
//             <button onClick={handleAddViand}>Add Viand</button>
//         </div>
//     );
// }

// export default ViandsList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import React, { useState } from 'react';
// import './ViandsList.css';

// function ViandsList() {
//     const [viands, setViands] = useState([]);

//     // Fetch data from the backend
//     useEffect(() => {
//         const fetchViands = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/viands');
//                 setViands(response.data);
//             } catch (error) {
//                 console.error('Error fetching viands:', error);
//             }
//         };

//         fetchViands();
//     }, []);

//     return (
//         <div>
//             <h1>Available Viands</h1>
//             <ul>
//                 {viands.map((viand) => (
//                     <li key={viand.id}>
//                         <h3>{viand.name}</h3>
//                         <p>{viand.description}</p>
//                         <p>Price: ₱{viand.price}</p>
//                         <p>{viand.available ? 'Available' : 'Out of stock'}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ViandsList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViandsList.css';

function ViandsList() {
    const [viands, setViands] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch viands data
    useEffect(() => {
        const fetchViands = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/viands');
                setViands(response.data);
            } catch (error) {
                console.error('Error fetching viands:', error);
            }
        };
        fetchViands();
    }, []);

    // Add item to cart
    const addToCart = (viand) => {
        setCart([...cart, viand]);
    };

    // Place order (basic example)
    const placeOrder = () => {
        alert(`Order placed for ${cart.length} items!`);
        setCart([]); // Clear the cart after placing order
    };

    return (
        <div className="viands-list">
            <h2>Available Viands</h2>
            {viands.map((viand) => (
                <div key={viand.id} className="viand-item">
                    <span>{viand.name}</span>
                    <button
                        className="add-to-cart-button"
                        onClick={() => addToCart(viand)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
            
            <div>
                <h3>Cart</h3>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            {cart.length > 0 && (
                <button className="place-order-button" onClick={placeOrder}>
                    Place Order
                </button>
            )}
        </div>
    );
}

export default ViandsList;
