import api from "./api";

class Assessment {
    create (data){
        return api.post('/api/daily/assessment/newdaily', data);
    }

    updateDaily (data){
        return api.put('/api/daily/assessment/updaily', data);
    }

    getDailyByUserID (patient_id){
        return api.get('/api/daily/assessment/user', patient_id);
    }
}

export default new Assessment();