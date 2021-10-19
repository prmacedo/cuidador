import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { FiInfo } from 'react-icons/fi';

import ProfessionalContainer from '../../../components/ProfessionalContainer';
import { useCurrentPage } from '../../../context/CurrentPage';

import './styles.css';

export default function Profile() {
  const [avatar, setAvatar] = useState();
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage('Meu Perfil');
  }, []);

  const history = useHistory();

  function redirectToProfile() {
    history.push('/MeuPerfil');
  }

  function handleSelectFile(evt) {
    setAvatar(evt.target.value);
    document.querySelector('.avatar-filename').placeholder = evt.target.value;
  }

  return (
    <ProfessionalContainer>
      <h2 className="update-profile-title">Atualizar Perfil</h2>

      <div className="update-profile-content">
        <form action="">
          <div className="row">
            <div className="col col-4">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="col col-4">
              <label htmlFor="lastname">Sobrenome</label>
              <input type="text" name="lastname" id="lastname" required />
            </div>
            <div className="col col-4">
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" id="cpf" required />
            </div>
          </div>
          
          <div className="row">
            <div className="col col-4">
              <label htmlFor="profession">Profissão</label>
              <input type="text" name="profession" id="profession" required />
            </div>
            <div className="col col-4">
              <label htmlFor="especiality">Especialidade</label>
              <input type="text" name="especiality" id="especiality" required />
            </div>
            <div className="col col-2">
              <label htmlFor="sigla">Sigla do conselho</label>
              <input type="text" name="sigla" id="sigla" required />
            </div>
            <div className="col col-2">
              <label htmlFor="council">Número do conselho</label>
              <input type="text" name="council" id="council" required />
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
              
              <input type="text" name="telephone" id="telephone" />
            </div>
            <div className="col col-4">
              <label htmlFor="email">
                E-mail 
                <span>
                  <span className="info-icon"><FiInfo /></span>
                  <span className="info-message">Essa informação ficará visível para o seu paciente.</span>
                </span>
              </label>
              
              <input type="text" name="email" id="email" />
            </div>
            <div className="col col-4 avatar">
              <label htmlFor="">Foto de Perfil</label>
              <div>
                <input className="avatar-filename" placeholder="Escolha um arquivo" />
                <label className="avatar-btn btn" htmlFor="avatar">Buscar</label>
              </div>
              <input type="file" name="avatar" id="avatar" value={avatar} onChange={(evt) => handleSelectFile(evt) } required />
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
              <input type="text" name="places" id="places" />
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