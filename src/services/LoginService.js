import axios from 'axios';
import * as jwt_decode from 'jwt-decode';

export const loginService = async (credentials) => {
    const response = await axios.post(
        "http://localhost:8000/api/token/",
        {
            username: credentials.username,
            password: credentials.password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};