import api from "./api";

class Assessment {
    create (data){
        return api.post('/api/daily/assessment/newdaily', data, { headers: authHeader() });
    }

    updateDaily (data){
        return api.put('/api/daily/assessment/updaily', data, { headers: authHeader() });
    }

    getDailyByUserID (patient_id){
        return api.get(`/api/daily/assessment/user/${patient_id}`, { headers: authHeader() });
    }
}

export default new Assessment();