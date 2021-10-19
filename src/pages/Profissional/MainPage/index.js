import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { useCurrentPage } from '../../../context/CurrentPage';

import ProfessionalContainer from '../../../components/ProfessionalContainer';

import profilePic from '../../../assets/images/icons/profile-user.svg';
import addIcon from '../../../assets/images/icons/add-icon.svg';
import searchIcon from '../../../assets/images/icons/search-icon.svg';
import closeIcon from '../../../assets/images/icons/close.svg';

import './styles.css';
import api_url from '../../../services/api';
import { useProfile } from '../../../context/Profile';

export default function MainPage() {
  const { profile } = useProfile();
  const [patients, setPatients] = useState([]);

  const [email, setEmail] = useState('');
  
  const [initialLetter, setInitialLetter] = useState('');
  

  const { setCurrentPage } = useCurrentPage();

  const history = useHistory();

  async function loadPatients() {
    const user = JSON.parse(localStorage.getItem("user"))?.user;
    const token = JSON.parse(localStorage.getItem("user"))?.token;

    const headers = { authorization: `Bearer ${token}` }

    const { data } = await api_url.get(`/professional/${user.id}/patients`, { headers });    
    setPatients(data);
  }

  useEffect(() => {
    setCurrentPage('Pacientes');
  
    loadPatients();
  }, []);

  useEffect(() => {
    // Realizar busca pela letra inicial do nome
  }, [initialLetter]);

  function redirectToPatient(patient_id) {
    history.push(`/paciente/${patient_id}`);
  }

  function handleSearchByLetter(event, letter) {
    const selected = document.querySelector('#search-alphabet span.active');
    if(selected) {
      document.querySelector('#search-alphabet span.active').classList.remove('active');
    }

    event.target.classList.add('active');

    setInitialLetter(letter);
  }

  function toggleAddPacientModal() {
    document.querySelector('#add-pacient-modal').classList.toggle('hide');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const headers = { authorization: `Bearer ${token}` }

      const { data } = await api_url.post("/conect_professional_patient", { email, id: profile.id }, { headers });

      console.log(data);
      setPatients([...patients, data]);

      toggleAddPacientModal();

      // mensagem de sucesso
    } catch (error) {
      console.log(error.response.data.message);
      // mensagem de erro
    }

    // limpar
  }

  return (
    <>
      <ProfessionalContainer>
        <div id="top-bar">
          <span id="add-button" onClick={ () => toggleAddPacientModal() }>
            <img src={addIcon} alt="Adicionar paciente"/>
            Adicionar paciente
          </span>

          <form action="">
            <input type="text" name="name" placeholder="Buscar paciente" />
            <button type="submit">
              <img src={searchIcon} alt="Buscar"/>
              Buscar
            </button>
          </form>
        </div>

        <h3 id="search-title">Meus Pacientes</h3>
        <div id="search-alphabet">
          <span onClick={ (evt) => handleSearchByLetter(evt, 'A') }>A</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'B') }>B</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'C') }>C</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'D') }>D</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'E') }>E</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'F') }>F</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'G') }>G</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'H') }>H</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'I') }>I</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'J') }>J</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'K') }>K</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'L') }>L</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'M') }>M</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'N') }>N</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'O') }>O</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'P') }>P</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'Q') }>Q</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'R') }>R</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'S') }>S</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'T') }>T</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'U') }>U</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'V') }>V</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'W') }>W</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'X') }>X</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'Y') }>Y</span>
          <span onClick={ (evt) => handleSearchByLetter(evt, 'Z') }>Z</span>
        </div>

        <div className="scroll-cards">
          <div id="cards-container">
            {
              (!patients.length) ? 
                <span>Não há pacientes</span>
              :
              patients.map(patient => (
                <div className="card" onClick={() => redirectToPatient(patient.patient.id)} key={patient.patient.id}>
                  <main>
                    <img src={profilePic} alt={`${patient.patient.first_name} ${patient.patient.last_name}`} />
                    <h4>{patient.patient.first_name} {patient.patient.last_name}</h4>
                    <p>{new Date().getFullYear() - new Date(patient.patient.birthday).getFullYear()} anos</p>
                  </main>

                  <footer>{patient.patient.city}, {patient.patient.state}</footer>
                </div>
              ))}
          </div>
        </div>

      </ProfessionalContainer>

      <div id="add-pacient-modal" className="hide">
        <div className="overlay" onClick={ () => toggleAddPacientModal() }></div>
        <div className="content">
          <span onClick={ () => toggleAddPacientModal() }><img src={closeIcon} alt="Fechar modal"/></span>
          <h3>Adicionar novo paciente</h3>
          <p>Insira o e-mail do Paciente para vincular suas contas</p>

          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail do paciente</label>
            <input type="email" value={email} onChange={(evt) => setEmail(evt.target.value)} name="email" id="email" placeholder="E-mail" required />
            <button type="submit">Adicionar paciente</button>
          </form>
        </div>
      </div>
    </>
  );
}