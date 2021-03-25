import axios from 'axios';
const API_URL = 'https://appsaudebackend.herokuapp.com'
import authHeader from './auth-header';


class GoalsService {
    insertProfissional (data){
        return axios.put(API_URL + '/api/goals/insert/profissional', data, { headers: authHeader() });
    }

    updateGoal (data){
        return axios.put(API_URL + '/api/goals/up', data, { headers: authHeader() });
    }

    getAllGoalsByUserId (patient_id){

        return axios.put(API_URL + '/api/goals/id', patient_id, { headers: authHeader() });
    }
}

export default new GoalsService();