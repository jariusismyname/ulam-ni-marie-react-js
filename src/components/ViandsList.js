// src/components/ViandsList.js
import React, { useState, useEffect } from 'react';
import { getViands, addViand } from '../api';

function ViandsList() {
    const [viands, setViands] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        async function fetchViands() {
            const data = await getViands();
            setViands(data);
        }
        fetchViands();
    }, []);

    const handleAddViand = async () => {
        const newViand = await addViand(name, price);
        setViands([...viands, newViand]);
        setName('');
        setPrice('');
    };

    return (
        <div>
            <h2>Available Viands</h2>
            <ul>
                {viands.map((viand) => (
                    <li key={viand.id}>{viand.name} - ₱{viand.price}</li>
                ))}
            </ul>
            <h3>Add a new viand</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Viand name"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
            />
            <button onClick={handleAddViand}>Add Viand</button>
        </div>
    );
}

export default ViandsList;
