import axios from 'axios';

const API_URL = axios.create({
    // baseURL: 'https://appsaudebackend.herokuapp.com/'
    baseURL: 'http://localhost:3030/'
})

export default API_URL;