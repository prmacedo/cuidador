import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://api-cuidador.herokuapp.com'


class GoalsService {
    // insertProfissional (data){
    //     return axios.put(API_URL + '/api/goals/insert/profissional', data, { headers: authHeader() });
    // }

    // updateGoal (data){
    //     return axios.put(API_URL + '/api/goals/up', data, { headers: authHeader() });
    // }

    getAllGoalsByUserId (patient_id){
        return axios.get(API_URL + `/goals/${patient_id}`, { headers: authHeader() });
    }
}

export default new GoalsService();