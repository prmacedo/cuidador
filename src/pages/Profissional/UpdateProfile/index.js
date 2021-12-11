import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { FiInfo } from 'react-icons/fi';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useCurrentPage } from '../../../context/CurrentPage';
import api_url from '../../../services/api';

import './styles.css';

export default function Profile() {
  const [avatar, setAvatar] = useState();
  const { setCurrentPage } = useCurrentPage();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [CPF, setCPF] = useState('');
  const [profession, setProfession] = useState('');
  const [especiality, setEspeciality] = useState('');
  const [sigla, setSigla] = useState('');
  const [council, setCouncil] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [places, setPlaces] = useState('');

  const user = JSON.parse(localStorage.getItem("user"))?.user;
  
  useEffect(() => {
    setCurrentPage('Meu Perfil');
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setCPF(user.cpf);
    setProfession(user.profissao);
    setEspeciality(user.specialization);
    setCouncil((user.crm).split('-')[0]);
    setSigla((user.crm).split('-')[1]);
    setTel(user.telefone);
    setEmail(user.email);
    setPlaces(user.service_locations);
  }, []);

  const id = JSON.parse(localStorage.getItem("user")).user.id
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const headers = { authorization: `Bearer ${token}` };

  function redirectToProfile() {
    history.push('/MeuPerfil');
  }

  function handleSelectFile(evt) {
    setAvatar(evt.target.value);
    document.querySelector('.avatar-filename').placeholder = evt.target.value;
  }

  async function handleUpdate(evt) {
    evt.preventDefault();

    const info = {      
      email,      
      specialization: especiality,
      profissao: profession,
      crm: (council+"-"+sigla),
      service_locations: places,
      cpf: CPF,
      first_name: firstName,
      last_name: lastName
    }
    const data = await api_url.put(`/professional/${id}`, info, { headers });
    
    console.log(data);
  }

  return (
    <ProfessionalContainer>
      <h2 className="update-profile-title">Atualizar Perfil</h2>

      <div className="update-profile-content">
        <form action="" onSubmit={handleUpdate}>
          <div className="row">
            <div className="col col-4">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} required/>
            </div>
            <div className="col col-4">
              <label htmlFor="lastname">Sobrenome</label>
              <input type="text" name="lastname" id="lastname" value={lastName} onChange={(evt) => setLastName(evt.target.value)} required />
            </div>
            <div className="col col-4">
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" id="cpf" value={CPF} onChange={(evt) => setCPF(evt.target.value)} required />
            </div>
          </div>
          
          <div className="row">
            <div className="col col-4">
              <label htmlFor="profession">Profissão</label>
              <input type="text" name="profession" id="profession" value={profession} onChange={(evt) => setProfession(evt.target.value)} required />
            </div>
            <div className="col col-4">
              <label htmlFor="especiality">Especialidade</label>
              <input type="text" name="especiality" id="especiality" value={especiality} onChange={(evt) => setEspeciality(evt.target.value)} required />
            </div>
            <div className="col col-2">
              <label htmlFor="sigla">Sigla do conselho</label>
              <input type="text" name="sigla" id="sigla" value={sigla} onChange={(evt) => setSigla(evt.target.value)} required />
            </div>
            <div className="col col-2">
              <label htmlFor="council">Número do conselho</label>
              <input type="text" name="council" id="council" value={council} onChange={(evt) => setCouncil(evt.target.value)} required />
            </div>
          </div>
          
          <div className="row">
            <div className="col col-4">
              <label htmlFor="telephone">
                Telefone 
                <span>
                  <span className="info-icon"><FiInfo /></span>
                  <span className="info-message">Essa informação ficará visível para o seu paciente.</span>
                </span>
              </label>
              
              <input type="text" name="telephone" id="telephone" value={tel} onChange={(evt) => setTel(evt.target.value)} />
            </div>
            <div className="col col-4">
              <label htmlFor="email">
                E-mail 
                <span>
                  <span className="info-icon"><FiInfo /></span>
                  <span className="info-message">Essa informação ficará visível para o seu paciente.</span>
                </span>
              </label>
              
              <input type="text" name="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            </div>
            <div className="col col-4 avatar">
              <label htmlFor="">Foto de Perfil</label>
              <div>
                <input className="avatar-filename" placeholder="Escolha um arquivo" />
                <label className="avatar-btn btn" htmlFor="avatar">Buscar</label>
              </div>
              <input type="file" name="avatar" id="avatar" value={avatar} onChange={(evt) => handleSelectFile(evt) } />
            </div>
          </div>
          
          <div className="row">
            <div className="col col-12">
              <label htmlFor="places">
                Locais onde trabalha <small>(separe com vírgula)</small>
                <span>
                  <span className="info-icon"><FiInfo /></span>
                  <span className="info-message">Essa informação ficará visível para o seu paciente.</span>
                </span>
                </label>
              <input type="text" name="places" id="places" value={places} onChange={(evt) => setPlaces(evt.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col col-6">
              <button type="submit" className="btn">
                Salvar alterações
              </button>
            </div>
            <div className="col col-6">
              <button type="button" className="btn" onClick={() => redirectToProfile()}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>

    </ProfessionalContainer>
  );
}