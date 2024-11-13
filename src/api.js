// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getViands = async () => {
    try {
        const response = await axios.get(`${API_URL}/viands`);
        return response.data;
    } catch (error) {
        console.error("Error fetching viands:", error);
        throw error;
    }
};

export const addViand = async (name, price) => {
    try {
        const response = await axios.post(`${API_URL}/viands`, { name, price });
        return response.data;
    } catch (error) {
        console.error("Error adding viand:", error);
        throw error;
    }
};
