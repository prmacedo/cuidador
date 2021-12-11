import PageHeader from '../../../components/PageHeader';
import React, { useState, useEffect } from 'react';

import './styles.css';

import api_url from '../../../services/api';

export default function Metas() {
  const [tasks, setTasks] = useState([]);

  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const headers = { authorization: `Bearer ${token}` }

  const user = JSON.parse(localStorage.getItem("user"))?.user.first_name;
  const id = JSON.parse(localStorage.getItem("user"))?.user.id;

  async function getDataGoals() {
    const { data } = await api_url.get(`/goals/${id}`, { headers });

    console.log(data);
    setTasks(data);
  }

  async function checkGoal(task_id) {
    const { data } = await api_url.patch(`/goals`, { id: task_id, checked: true } , { headers });
    document.location.reload();
  }

  useEffect(() => {
    getDataGoals();
  }, []);

  return (
    <div id="page-cuidadores" className="container">
      <PageHeader name={user} />

      <main>
        <h1>Minhas metas</h1>

        <div className="tasks">
          <div className="title">
            <h2>Atividades</h2>
          </div>

          <div className="content">
            <div className="in-progress">
              <h3>Em andamento</h3>

              <div>
                <form action="">
                  {    
                    tasks.emAndamento?.length
                    ?
                    tasks.emAndamento?.map(task => (
                      <div className="input-group" key={task.id}>
                        <input type="checkbox" name={task.id} id={task.id} value={task.id} onClick={() => checkGoal(task.id)} />
                        <div className="task-item-group">
                          <label htmlFor={task.id}>{task.content}</label>
                          <span className="duration">{task.frequency_per_week} dia(s) por semana</span>
                        </div>
                      </div>
                    ))                      
                    :
                    <p>Não há nenhum objetivo concluído.</p>
                  }
                </form>
              </div>
            </div>

            <div className="completed">
              <h3>Concluídas</h3>

              <div>
                {
                  tasks.concluidos?.length 
                  ?
                  tasks.concluidos?.map(task => (
                    <div className="input-group" key={task.id}>
                      <input type="checkbox" name={task.id} id={task.id} disabled checked value={task.id} />
                      <div className="task-item-group">
                        <label htmlFor={task.id}>{task.content}</label>
                        <span className="duration">{task.frequency_per_week} dia(s) por semana</span>
                      </div>
                    </div>
                  ))
                  :
                  <p>Não há nenhuma meta concluída.</p>
                }        
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>

  );
}