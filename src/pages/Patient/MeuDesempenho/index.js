import React from 'react';
import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';

import './styles.css'

export default function MeuDesempenho() {   
  return (  
    <>
      <header></header>
      <main>
        <BarChart />
        <hr/>
        <LineChart />
        <hr/>
        <MultipleLineChart />
      </main>
    </>
  );
}