import API_URL from './api';


class AuthService {

  patientLogin(email, password) {
    return API_URL.post('login/patient', {
      email,
      password
    })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));

        }

        return response.data;
      });
  }

  professionalLogin(email, password) {
    return API_URL.post('login/professional ', {
      email,
      password
    })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));

        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");

  }

  patientRegister(email, password, first_name, last_name, birthday, cpf) {
    return API_URL.post('/patients', {
      email,
      password,
      first_name,
      last_name,
      birthday,
      cpf
    }).then(response => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  professionalRegister(email, password, first_name, last_name, birthday, cpf, crm) {
    return API_URL.post('/professionals', {
      email,
      password,
      first_name,
      last_name,
      birthday,
      cpf,
      crm
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));

      }

      return response.data;
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log(user)
      return user
    } else {
      return false
    }

  }
}

export default new AuthService();
