import API_URL from './api';


class AuthService {

  patientLogin(email, password) {
    return API_URL.post('api/patient/authentication', {
      email,
      password
    })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
         
        }

        return response.data;
      });
  }

  professionalLogin(email, password) {
    return API_URL.post('api/professional/authentication', {
      email,
      password
    })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
 
  }

  patientRegister(firstName, lastName, email, password) {
    return API_URL.post('api/patient/register', {
      firstName,
      lastName,
      email,
      password
    });
  }

  professionalRegister(firstName, lastName, email, Doc, password) {
    return API_URL.post('api/professional/register', {
      firstName,
      lastName,
      email,
      Doc,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      console.log(user)
      return user
    } else {
      return false
    }
    
}
}

export default new AuthService();
