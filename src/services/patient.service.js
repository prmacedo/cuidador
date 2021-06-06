import axios from 'axios';

import authHeader from './auth-header';
const API_URL = 'https://api-cuidador.herokuapp.com'
// const API_URL = 'http://localhost:3030';



class PatientService {

    //Não ta funcionando
    // getMyData (data){
    //     return axios.post(API_URL + '/api/patient/data/myprofile', data, { headers: authHeader() });
    // }

    // updateMyData (data){
    //     return axios.put(API_URL + '/api/patient/data/updateMyprofile', data, { headers: authHeader() });
    // }
    
    insertProfissional (data){
        return axios.put(API_URL + '/conect_professional_patient', data, { headers: authHeader() });
    }

    // returnMyProfissionals (data){
    //     return axios.post(API_URL + '/api/patient/data/myprofissional', data, { headers: authHeader() });
    // }

    // novaAvaliacaoDiaria (data){
    //     return axios.put(API_URL + '/api/daily/assessment/newdaily', data, { headers: authHeader() });
    // }

    // getAvaliacaoDiaria (data){
    //     return axios.post(API_URL + '/api/daily/assessment/user', data, { headers: authHeader() });
    // }

    // updateAvaliacaoDiaria (data){
    //     return axios.put(API_URL + '/api/daily/assessment/updaily', data, { headers: authHeader() });
    // }

    getNews (){
        return axios.get(API_URL + '/pain_education', { headers: authHeader() });
    }
    


    
}

export default new PatientService();