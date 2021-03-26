import axios from 'axios';

const API_URL = axios.create({
    baseURL: 'https://appsaudebackend.herokuapp.com/'
})

export default API_URL;