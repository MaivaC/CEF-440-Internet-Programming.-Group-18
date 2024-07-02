import axios from 'axios';

const API_URL = 'http://localhost:3000';  // Change to your server URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Registration Error: ", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error("Login Error: ", error);
        throw error;
    }
};
