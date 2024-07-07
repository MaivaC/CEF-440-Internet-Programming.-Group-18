import axios from 'axios';
import bcrypt from 'react-native-bcrypt';

const API_URL = 'https://db-hosting-sql-resq.vercel.app/api/v1/accounts';  // Change to your server URL

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
