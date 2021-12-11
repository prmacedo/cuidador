import React, { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router';


import CircularProgressBar from '../../../components/CircleProgressBar';
import ProfessionalContainer from '../../../components/ProfessionalContainer';

import profilePic from '../../../assets/images/icons/profile-user.svg';
import closeIcon from '../../../assets/images/icons/close.svg';
import addIcon from '../../../assets/images/icons/add-icon.svg';
import backIcon from '../../../assets/images/icons/back.svg';

import { useHiddenSidebar } from '../../../context/HiddenSidebar';

import './styles.css';
import { useCurrentPage } from '../../../context/CurrentPage';
import api_url from '../../../services/api';

export default function Goals() {
  const [monthPercentage, setMonthPercentage] = useState(33);
  const [totalPercentage, setTotalPercentage] = useState(25);

  const { setCurrentPage } = useCurrentPage();
  const { hideSidebar } = useHiddenSidebar();

  const { id } = useParams();

  const history = useHistory();

  const [patient, setPatient] = useState({});
  const [goals, setGoals] = useState({});
  const [reloadGoals, setReloadGoals] = useState(false);

  const [frequency, setFrequency] = useState(0);
  const [content, setContent] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const [lastAccess, setLastAccess] = useState("");

  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const headers = { authorization: `Bearer ${token}` }

  // async function getDataAccessPatient() {
  //   const token = JSON.parse(localStorage.getItem("user"))?.token;

  //   const headers = { authorization: `Bearer ${token}` }

  //   const { data } = await api_url.get(`/patient/${id}/access`, { headers });

  //   setAccess(data.access);
  //   // console.log(data.access);
  // }

  async function getLastAccess() {
    const { data } = await api_url.get(`/patient/${id}/access/last`, { headers });
    setLastAccess(String(data.ultimoAcesso).split("T")[0].split("-").reverse().join("/"));
  }

  async function getDataPatient() {
    const { data } = await api_url.get(`/patient/${id}`, { headers });

    // console.log(data);
    setPatient(data);
  }

  async function getDataGoals() {
    const { data } = await api_url.get(`/goals/${id}`, { headers });

    setGoals(data);
  }

  useEffect(() => {
    setCurrentPage('Metas');

    getDataPatient();
    getLastAccess();
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

  useEffect(() => {
    getDataGoals();
  }, [reloadGoals]);

  function toggleAddGoalModal() {
    document.querySelector('#add-goal-modal').classList.toggle('hide');
  }

  async function handleAddGoal (evt) {
    evt.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"))?.user;

    const request = {
      content,
      patient_id: id,
      professional_id: user.id,
      frequency_per_week: frequency,
      runtime: 0,
      dataInicio: start,
      dataFinal: end
    }

    await api_url.post('/goals/', request, { headers });

    toggleAddGoalModal();
    resetGoalsInputFields();

    setReloadGoals(!reloadGoals);
  }

  function resetGoalsInputFields() {
    setFrequency(1);
    setContent('');
    setStart('');
    setEnd('');

    document.querySelector("#frequency").value = 1;
  }

  return (
    <>
      <ProfessionalContainer>
        <div id="patient-cards">
          <div id="profile-card">
            <img src={profilePic} alt="Usuário" />
            <div>
              <h2>{`${patient.first_name} ${patient.last_name}`}</h2>
              <span>
                {lastAccess ?
                  `Último acesso: ${lastAccess}`
                  : "Nunca acessou!"
                }
              </span>
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
            <button type="button" className="btnAddGoal" onClick={() => toggleAddGoalModal()}>
              <img src={addIcon} alt="Adicionar meta" />
              Adicionar meta
            </button>

            <button type="button" className="goBackBtn" onClick={() => history.goBack()}>
              ← Voltar
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
                {
                  goals.emAndamento?.map(goal => (
                    <div className="goal-item" key={goal.id}>
                      <span className="activity">{goal.content}</span>
                      <span className="duration">{goal.frequency_per_week} dia(s) por semana</span>
                    </div>
                  ))
                }
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
                {
                  goals.concluidos?.map(goal => (
                    <div className="goal-item" key={goal.id}>
                      <span className="activity">{goal.content}</span>
                      <span className="duration">{goal.frequency_per_week} dia(s) por semana</span>
                    </div>
                  ))
                }
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
                {
                  goals.naoConcluidos?.map(goal => (
                    <div className="goal-item" key={goal.id}>
                      <span className="activity">{goal.content}</span>
                      <span className="duration">{goal.frequency_per_week} dia(s) por semana</span>
                    </div>
                  ))
                }
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

          <form action="" onSubmit={handleAddGoal}>
            <div className="input-group">
              <label htmlFor="goal">Tarefa</label>
              <input type="text" name="goal" id="goal" placeholder="Digite a tarefa" required
                value={content}
                onChange={(evt) => setContent(evt.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="frequency">Frequência semanal</label>
              <select name="frequency" id="frequency" required
                onChange={(evt) => setFrequency(evt.target.value)}
              >                
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
                <input type="date" name="start" id="start" required 
                  value={start}
                  onChange={(evt) => setStart(evt.target.value)}
                />
              </div>

              <div className="input-group pl-4">
                <label htmlFor="end">Até</label>
                <input type="date" name="end" id="end" required 
                  value={end}
                  onChange={(evt) => setEnd(evt.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btnAddGoal">
              Adicionar tarefa
            </button>
          </form>

        </div>
      </div>
    </>
  );
}