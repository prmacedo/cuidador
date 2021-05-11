import React, { useEffect } from 'react';

import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useHiddenSidebar } from '../../../context/HiddenSidebar';

import './styles.css';

export default function InfoPatient() {

  const { hideSidebar } = useHiddenSidebar();

  useEffect(() => {
    if(hideSidebar) {
      document.querySelector('#lineChartContainer').classList.add('strech')
      document.querySelector('#barChartContainer').classList.add('strech')
      document.querySelector('#multiLineChartContainer').classList.add('strech')
    } else {
      document.querySelector('#lineChartContainer').classList.remove('strech')
      document.querySelector('#barChartContainer').classList.remove('strech')
      document.querySelector('#multiLineChartContainer').classList.remove('strech')
    }

  }, [hideSidebar]);


  return (
    <ProfessionalContainer>
      <div id="patient-info">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <div id="patient-charts" className="scroll-charts">
        <LineChart />
        <BarChart />
        <MultipleLineChart />
      </div>
    </ProfessionalContainer>
  );
}