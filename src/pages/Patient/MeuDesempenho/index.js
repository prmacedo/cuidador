import React from 'react';

import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';

import back from '../../../assets/images/icons/back.svg';
import logoWhite from '../../../assets/images/logoAppWhite.svg';
import logout from '../../../assets/images/icons/logout.svg';

import './styles.css'

export default function MeuDesempenho() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80) {
      document.querySelector('#fixed-header').classList.add('scrolled');
    } else {
      document.querySelector('#fixed-header').classList.remove('scrolled');
    }
  })
  
  return (  
    <>
      <header id="fixed-header">
        <div><span><img src={back} alt="Voltar" />Voltar</span></div>
        <img src={logoWhite} alt="CuidaDor" className="logo"/>
        <div><span><img src={logout} alt="Sair" />Sair</span></div>
      </header>

      <main id="meu-desempenho">
        <h2>Meu Desempenho</h2>
        <BarChart />
        <hr/>
        <LineChart />
        <hr/>
        <MultipleLineChart />
      </main>
    </>
  );
}