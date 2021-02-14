import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        // 'Content-Type': null,
        "Access-Control-Allow-Origin": "*",
        "User-Email": sessionStorage.getItem('logInResponse') ? JSON.parse(sessionStorage.getItem('logInResponse')).username : null
    }
});