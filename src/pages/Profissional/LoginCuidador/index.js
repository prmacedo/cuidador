import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../../assets/styles/global.css';
import logoImg from '../../../assets/images/logoApp.svg';
import Doctor from '../../../assets/images/doctor.svg';

import api_url from '../../../services/api';
// import AuthService from '../../../services/auth.service'

// import './styles.css';
import '../../../assets/styles/login.css'
import { useProfile } from '../../../context/Profile';



function LoginCuidadores() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setProfile } = useProfile();

  async function handleSubmitForm(e) {
    e.preventDefault();

    try {
      const { data } = await api_url.post("/login/professional", {
        email,
        password
      });
      
      localStorage.setItem("user", JSON.stringify(data));
      
      const user = data.user;
      setProfile(user);
      history.push('/MainPage');

    } catch (error) {
      console.log(error.response.data.message);
    }


    // AuthService.professionalLogin(email, password).then(() => {
    //     history.push('/MainPage');
    // }).catch(() => {
    //     alert('Erro! Usuário não cadastrado');
    // })
  }


  // useEffect(() => {
  //     (async () => {
  //         const logged = await AuthService.isAuthenticated()
  //         setUserData(logged)
  //         if (logged.role == "Pacient") {
  //             history.push('/appmenu');
  //         } else if (logged.role == "Professional") {
  //             history.push('/MainPage');
  //         }

  //     })();
  // }, []);




  return (
    <div className="page-app">


      <div className="container">
        <div className="page-wrapper">
          <div className="logo-container">
            <img src={logoImg} alt="Teste" />
            <h2>Para Profissionais</h2>

          </div>
          <img src={Doctor}
            alt="Plataforma Teste"
            className="hero-image"
          />

          <main>
            <form onSubmit={handleSubmitForm}>
              <fieldset>
                <div className="input-block email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="input-block input">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
              </fieldset>

              <div className="buttons-container">
                <button  >
                  Entrar
                            </button>
              </div>

            </form>
            <div className="buttons-container">
              <button className="change-role" >
                <Link to="/">
                  Pacientes
                                </Link>
              </button>
            </div>

          </main>



          <div className="cadastro">
            <Link to="/cadastro">
              Ainda não tem conta? Cadastre-se
                    </Link>
          </div>



          <span className="footer">
            Produzido por: E-brains Team
                </span>

        </div>
      </div>
    </div>

  );
  ;
}

export default LoginCuidadores;