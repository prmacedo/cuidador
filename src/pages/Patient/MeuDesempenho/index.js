import React from 'react';

import PageHeader from '../../../components/PageHeader';
import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';

import './styles.css'

export default function MeuDesempenho() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 80) {
      document.querySelector('#fixed-header').classList.add('scrolled');
    } else {
      document.querySelector('#fixed-header').classList.remove('scrolled');
    }
  });

  return (  
    <>      
      <PageHeader />

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