import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useCurrentPage } from '../../../context/CurrentPage';

import './styles.css';

export default function Profile() {
  const history = useHistory();
  const {setCurrentPage} = useCurrentPage();

  const user = JSON.parse(localStorage.getItem("user")).user;

  useEffect(() => {
    setCurrentPage('Meu Perfil');
  }, []);

  function redirectToUpdateProfile() {
    history.push('/AtualizarPerfil');
  }

  return (
    <ProfessionalContainer>
      <h2 className="profile-title">Meus dados</h2>

      <div className="profile-content">
        <div>
          <span className="info">Nome Completo:</span>
          <span className="info-value">{`${user.first_name} ${user.last_name}`}</span>
        </div>

        <div>
          <span className="info">Profissão:</span>
          <span className="info-value">{`${user.profissao}`}</span>
        </div>

        <div>
          <span className="info">Especialidade:</span>
          <span className="info-value">{`${user.specialization}`}</span>
        </div>

        <div>
          <span className="info">Nº do conselho:</span>
          <span className="info-value">{(user.crm).split('-')[0]}</span>
        </div>

        <div>
          <span className="info">Sigla do conselho:</span>
          <span className="info-value">{(user.crm).split('-')[1] ? (user.crm).split('-')[1].toUpperCase():"Não informado"}</span>
        </div>

        <div>
          <span className="info">Locais onde trabalha:</span>
          <span className="info-value">{user.service_locations}</span>
        </div>

        <div id="contact">
          <span className="info">Contato:</span>
          <div className="info-value">
            <span className="telephone">(99) 9 9999-9999</span>
            <span className="email">{user.email}</span>
          </div>
        </div>

        <button type="button" onClick={() => redirectToUpdateProfile()}>
          Atualizar informações
        </button>
      </div>

    </ProfessionalContainer>
  );
}