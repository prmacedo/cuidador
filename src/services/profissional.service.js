import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'https://appsaudebackend.herokuapp.com'
const API_URL = 'http://localhost:3030';    


class ProfissionalService {

    myProfile (data){
        return axios.post(API_URL + '/api/professional/data/myprofile', data, { headers: authHeader() });
    }

    insertPatient (data){
        return axios.put(API_URL + '/api/professional/data/patientInsertion', data, { headers: authHeader() });
    }

    returnMyPatients (data){
        return axios.post(API_URL + '/api/professional/data/mypatients', data, { headers: authHeader() });
    }
}

export default new ProfissionalService();