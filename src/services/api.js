import axios from 'axios';

const API_URL = axios.create({
    baseURL: 'https://api-cuidador.herokuapp.com/'
})

export default API_URL;