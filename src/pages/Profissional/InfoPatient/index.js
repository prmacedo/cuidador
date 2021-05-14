import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import BarChart from '../../../components/Charts/BarChart';
import LineChart from '../../../components/Charts/LineChart';
import MultipleLineChart from '../../../components/Charts/MultipleLineChart';
import CircularProgressBar from '../../../components/CircleProgressBar';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useHiddenSidebar } from '../../../context/HiddenSidebar';

import profilePic from '../../../assets/images/icons/profile-user.svg';
import clipboard from '../../../assets/images/icons/clipboard.svg';
import chat from '../../../assets/images/icons/chat-blue.svg';

import './styles.css';
import { useCurrentPage } from '../../../context/CurrentPage';

export default function InfoPatient() {
  const [percentage, setPercentage] = useState(50);
  const { setCurrentPage } = useCurrentPage();
  const { hideSidebar } = useHiddenSidebar();

  useEffect(() => {
    setCurrentPage('Pacientes');
  }, []);

  useEffect(() => {
    if(hideSidebar) {
      document.querySelector('#lineChartContainer').classList.add('strech');
      document.querySelector('#barChartContainer').classList.add('strech');
      document.querySelector('#multiLineChartContainer').classList.add('strech');
      document.querySelector('.scroll-charts').classList.add('strech');
    } else {
      document.querySelector('#lineChartContainer').classList.remove('strech');
      document.querySelector('#barChartContainer').classList.remove('strech');
      document.querySelector('#multiLineChartContainer').classList.remove('strech');
      document.querySelector('.scroll-charts').classList.remove('strech');
    }

  }, [hideSidebar]);

  const history = useHistory();

  const redirectToGoals = () => {
    history.push('/goals');
  }

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

        <div id="goals-card" className="card" onClick={redirectToGoals}>
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