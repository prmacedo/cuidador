import React from 'react';
import { useHistory } from 'react-router-dom';

import AuthService from '../../services/auth.service'

import back from '../../assets/images/icons/back.svg';
import logoWhite from '../../assets/images/logoAppWhite.svg';
import logout from '../../assets/images/icons/logout.svg';

import './styles.css';

export default function PageHeader({hideComeBack, hideLogout}) {
  const history = useHistory();

  function handleComeBack() {
    history.goBack();
  }

  function handleLogout() {
    AuthService.logout();
    history.push("/");
  }

  if (document.querySelector('#fixed-header')) {      
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        document.querySelector('#fixed-header').classList.add('scrolled');
      } else {
        document.querySelector('#fixed-header').classList.remove('scrolled');
      }
    });
  }

  return (
    <>
      <header id="fixed-header">
        <div onClick={() => handleComeBack()}>{!hideComeBack && <span><img src={back} alt="Voltar" />Voltar</span>}</div>
        <img src={logoWhite} alt="CuidaDor" className="logo" />
        <div onClick={() => handleLogout()}>{!hideLogout && <span><img src={logout} alt="Sair" />Sair</span>}</div>
      </header>
      <div className="spacing"></div>
    </>
  );
}