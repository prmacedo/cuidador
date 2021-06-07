import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useLoginType } from '../../context/LoginType';
import { useProfile } from '../../context/Profile';

import api_url from '../../services/api';

import logoImg from '../../assets/images/logoApp.svg';
import Doctor from '../../assets/images/doctor.svg';
import Patient from '../../assets/images/landingApp.svg';
import exclamationIcon from '../../assets/images/exclamation.png'

import { LoopCircleLoading } from 'react-loadingg';

import styles from './styles.module.css';

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFaild, setIsLoginFaild] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const { loginType, setLoginType, selectedUserType, notSelectedUserType } = useLoginType();
  const { setProfile } = useProfile();

  const history = useHistory();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [loginType])

  function handleSubmitForm(evt) {
    evt.preventDefault();

    if (loginType === "Patient") {
      handlePatientLogin();
    } else {
      handleProfessionalLogin();
    }
  }

  async function handlePatientLogin() {
    try {
      setIsPageLoading(true)
      const { data } = await api_url.post("/login/patient", {
        email,
        password
      });

      localStorage.setItem("user", JSON.stringify(data));
      history.push('/AppMenu');

    } catch (error) {
      setIsLoginFaild(true)
      setIsPageLoading(false)
      console.log(error.response.data.message);
    }
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

  function handleLoginFaildBorderColor() {
    return isLoginFaild ? { borderColor: '#ff0036' } : {}
  }


  return (
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
              style={handleLoginFaildBorderColor()}
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              id="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            {isLoginFaild ? <LoginFaildComponent /> : <div></div>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite a sua senha"
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
      
      {isPageLoading? <LoopCircleLoading size='small' color='#003d75'/>:<div></div>}
      
    
    </div>
  );
}

const LoginFaildContainer = styled.div`
      margin-top: 5px;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      color: rgb(223, 54, 90);
      align-items: center;
      
`;


function LoginFaildComponent() {
  return (
    <LoginFaildContainer>
      <img src={exclamationIcon} style={{ marginRight: '5px' }} alt="exclamation" />
      <small>Digite um endereço e senha válidos</small>
    </LoginFaildContainer>
  )

}