import React, { useEffect, useState } from 'react';

import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useHiddenSidebar } from '../../../context/HiddenSidebar';

import profilePic from '../../../assets/images/icons/profile-user.svg';
import clipboard from '../../../assets/images/icons/clipboard.svg';
import chat from '../../../assets/images/icons/chat-blue.svg';

import './styles.css';
import CircularProgressBar from '../../../components/CircleProgressBar';

export default function InfoPatient() {
  const [percentage, setPercentage] = useState(50);
  const { hideSidebar } = useHiddenSidebar();

  useEffect(() => {
    if(hideSidebar) {
      document.querySelector('#lineChartContainer').classList.add('strech');
      document.querySelector('#barChartContainer').classList.add('strech');
      document.querySelector('#multiLineChartContainer').classList.add('strech');
    } else {
      document.querySelector('#lineChartContainer').classList.remove('strech');
      document.querySelector('#barChartContainer').classList.remove('strech');
      document.querySelector('#multiLineChartContainer').classList.remove('strech');
    }

  }, [hideSidebar]);


  return (
    <ProfessionalContainer>
      <div id="patient-info">
        <div id="profile-card">
          <img src={profilePic} alt="Usuário" />
          <div>
            <h2>José Freitas Albuquerde Santiago</h2>
            <span>Último acesso: 16/04</span>
          </div>
        </div>

        <div id="month-access-card" className="card">
          <h3>Acessos no mês</h3>
          <CircularProgressBar 
            strokeWidth="10"
            sqSize="200"
            percentage={percentage}
          />
          <small>29/30</small>
        </div>

        <div id="goals-card" className="card">
          <h3>Metas do paciente</h3>
          <img src={clipboard} alt="Metas" />
          <small>Tarefas a serem realizadas pelo paciente</small>
        </div>

        <div id="chat-card" className="card">
          <h3>Chat Interprofissional</h3>
          <img src={chat} alt="Chat Interprofissional" />
          <small>Compartilhe informações do paciente com outros profissionais</small>
        </div>
      </div>
      
      <div id="patient-charts" className="scroll-charts">
        <LineChart />
        <BarChart />
        <MultipleLineChart />
      </div>
    </ProfessionalContainer>
  );
}