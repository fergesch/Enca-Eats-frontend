import axios from 'axios';

export default axios.create({
    baseURL: 'https://enca-eats-backend.azurewebsites.net',
    headers: {
        // 'Content-Type': null,
        "Access-Control-Allow-Origin": "*",
      }
  });