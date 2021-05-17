import axios from 'axios';

const api_url = axios.create({
    baseURL: "https://api-cuidador.herokuapp.com"
});

export default api_url;