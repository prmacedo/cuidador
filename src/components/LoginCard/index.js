import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useLoginType } from '../../context/LoginType';
import { useProfile } from '../../context/Profile';

import api_url from '../../services/api';

import logoImg from '../../assets/images/logoApp.svg';
import Doctor from '../../assets/images/doctor.svg';
import Patient from '../../assets/images/landingApp.svg';

import styles from './styles.module.css';

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginType, setLoginType, selectedUserType, notSelectedUserType } = useLoginType();
  const { setProfile } = useProfile();

  const history = useHistory();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [loginType])
  
  function handleSubmitForm(evt) {
    evt.preventDefault();

    if(loginType === "Patient") {
      handlePatientLogin();
    } else {
      handleProfessionalLogin();
    }
  }
  
  function handlePatientLogin() {

  }

  async function handleProfessionalLogin() {
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
  }


  return (
    <div id={styles.loginCard}>
      <div className={styles.container}>
        <div className={`${styles.image} ${styles.item1}`}>
          <img src={(loginType === "Patient") ? Patient : Doctor} alt={`Imagem do login de ${selectedUserType}`} />
        </div>
        
        <img src={logoImg} alt="Cuidador logo" className={`${styles.logo} ${styles.item2}`} />

        <div className={`${styles.content} ${styles.item3}`}>
          <h2>Entrar como {selectedUserType}</h2>

          <form action="" onSubmit={handleSubmitForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>

            <button className={styles.btn} type="submit">Entrar</button>
            <a 
              className={`${styles.btn} ${styles.btnSecondary}`} 
              onClick={() => setLoginType(notSelectedUserType.type)}
            >
              Entrar como {notSelectedUserType.label}
            </a>
            <Link to="/Cadastro" className={styles.link}>Ainda não tem conta? Cadastre-se</Link>
          </form>
        </div>
      </div>
    </div>
  );
}