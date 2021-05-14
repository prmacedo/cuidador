import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useCurrentPage } from '../../../context/CurrentPage';

import './styles.css';

export default function Profile() {
  const history = useHistory();
  const {setCurrentPage} = useCurrentPage();

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
          <span className="info-value">Roberta Silveira</span>
        </div>

        <div>
          <span className="info">Profissão:</span>
          <span className="info-value">Médica Acupunturista</span>
        </div>

        <div>
          <span className="info">Especialidade:</span>
          <span className="info-value">Clínica da dor</span>
        </div>

        <div>
          <span className="info">Nº do conselho:</span>
          <span className="info-value">000000</span>
        </div>

        <div>
          <span className="info">Sigla do conselho:</span>
          <span className="info-value">AL</span>
        </div>

        <div>
          <span className="info">Locais onde trabalha:</span>
          <span className="info-value">Clínica Shiatsu, Clínica de exemplo 1</span>
        </div>

        <div id="contact">
          <span className="info">Contato:</span>
          <div className="info-value">
            <span className="telephone">(99) 9 9999-9999</span>
            <span className="email">roberta@gmail.com</span>
          </div>
        </div>

        <button type="button" onClick={() => redirectToUpdateProfile()}>
          Atualizar informações
        </button>
      </div>

    </ProfessionalContainer>
  );
}