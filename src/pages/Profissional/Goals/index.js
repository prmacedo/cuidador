import React, { useEffect, useState } from 'react';

import CircularProgressBar from '../../../components/CircleProgressBar';
import ProfessionalContainer from '../../../components/ProfessionalContainer';

import profilePic from '../../../assets/images/icons/profile-user.svg';
import closeIcon from '../../../assets/images/icons/close.svg';
import addIcon from '../../../assets/images/icons/add-icon.svg';

import { useHiddenSidebar } from '../../../context/HiddenSidebar';

import './styles.css';
import { useCurrentPage } from '../../../context/CurrentPage';

export default function Goals() {
  const [monthPercentage, setMonthPercentage] = useState(33);
  const [totalPercentage, setTotalPercentage] = useState(25);

  const { setCurrentPage } = useCurrentPage();
  const { hideSidebar } = useHiddenSidebar();

  useEffect(() => {
    setCurrentPage('Metas');
  }, []);

  useEffect(() => {
    if (hideSidebar) {
      document.querySelectorAll('.goal-items .scroll').forEach(element => {
        element.classList.add('stretch');
      });      
    } else {
      document.querySelectorAll('.goal-items .scroll').forEach(element => {
        element.classList.remove('stretch');
      });      
    }

  }, [hideSidebar]);

  function toggleAddGoalModal() {
    document.querySelector('#add-goal-modal').classList.toggle('hide');
  }

  return (
    <>
      <ProfessionalContainer>
        <div id="patient-cards">
          <div id="profile-card">
            <img src={profilePic} alt="Usuário" />
            <div>
              <h2>José Freitas Albuquerde Santiago</h2>
              <span>Último acesso: 16/04</span>
            </div>
          </div>

          <div id="month-goals" className="card">
            <h3>Metas concluídas no mês</h3>
            <CircularProgressBar
              strokeWidth="10"
              sqSize="200"
              percentage={monthPercentage}
            />
            <small>1/3</small>
          </div>

          <div id="total-goals" className="card">
            <h3>Metas concluídas no total</h3>
            <CircularProgressBar
              strokeWidth="10"
              sqSize="200"
              percentage={totalPercentage}
            />
            <small>2/8</small>
          </div>

          <div id="add-goal-button">
            <button type="button" onClick={() => toggleAddGoalModal()}>
              <img src={addIcon} alt="Adicionar meta" />
            Adicionar meta
          </button>
          </div>
        </div>

        <div id="goals-list">
          <div className="goal-list">
            <div className="header">
              <h2>Em andamento</h2>
              <p>Tarefas que devem ser concluídas ao longo desta semana</p>
            </div>
            <hr />
            <div className="goal-items">
              <div className="scroll">
                <div className="goal-item">
                  <span className="activity">Alongar ao acordar</span>
                  <span className="duration">7 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Alongar antes do exercício</span>
                  <span className="duration">2 dias por semana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="goal-list">
            <div className="header">
              <h2>Concluídas</h2>
              <p>Histórico de tarefas concluídas pelo paciente</p>
            </div>
            <hr />
            <div className="goal-items">
              <div className="scroll">
                <div className="goal-item">
                  <span className="activity">Alongar ao acordar</span>
                  <span className="duration">7 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Alongar antes do exercício</span>
                  <span className="duration">2 dias por semana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="goal-list">
            <div className="header">
              <h2>Não concluídas</h2>
              <p>Histórico de tarefas não concluídas pelo paciente na semana em que foram passadas</p>
            </div>
            <hr />
            <div className="goal-items">
              <div className="scroll">
                <div className="goal-item">
                  <span className="activity">Alongar ao acordar</span>
                  <span className="duration">7 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Fazer agachamento</span>
                  <span className="duration">5 dias por semana</span>
                </div>

                <div className="goal-item">
                  <span className="activity">Alongar antes do exercício</span>
                  <span className="duration">2 dias por semana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfessionalContainer>

      <div id="add-goal-modal" className="hide">
        <div className="overlay"></div>
        <div className="content">
          <span onClick={() => toggleAddGoalModal()}><img src={closeIcon} alt="Fechar modal" /></span>
          <h2>Adicionar nova meta</h2>
          <p>Defina a tarefa, a frequência semanal e por quanto tempo o paciente deve realizá-la</p>

          <hr />

          <form action="">
            <div className="input-group">
              <label htmlFor="goal">Tarefa</label>
              <input type="text" name="goal" id="goal" placeholder="Digite a tarefa" required/>
            </div>

            <div className="input-group">
              <label htmlFor="frequency">Frequência semanal</label>
              <select name="frequency" id="frequency" required>
                <option value="" selected disabled hidden>Selecione a frequência</option>
                <option value="1">1x por semana</option>
                <option value="2">2x por semana</option>
                <option value="3">3x por semana</option>
                <option value="4">4x por semana</option>
                <option value="5">5x por semana</option>
                <option value="6">6x por semana</option>
                <option value="7">7x por semana</option>
              </select>
            </div>

            <span id="duration-title">Duração da tarefa</span>
            <div className="duration">
              <div className="input-group pr-4">
                <label htmlFor="start">De</label>
                <input type="date" name="start" id="start" required />
              </div>

              <div className="input-group pl-4">
                <label htmlFor="end">Até</label>
                <input type="date" name="end" id="end" required />
              </div>
            </div>

            <button type="submit">
              Adicionar tarefa
            </button>
          </form>

        </div>
      </div>
    </>
  );
}