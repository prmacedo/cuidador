import React, { useState } from 'react';
import { useHistory } from 'react-router';

import ProfessionalContainer from '../../../components/ProfessionalContainer';

import './styles.css';

export default function Profile() {
  const [avatar, setAvatar] = useState();

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
              <label htmlFor="">CPF</label>
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
              <label htmlFor="telephone">Telefone</label>
              <input type="text" name="telephone" id="telephone" required />
            </div>
            <div className="col col-4">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="col col-4 avatar">
              <label htmlFor="">Foto de Perfil</label>
              <div>
                <input className="avatar-filename" placeholder="Escolha um arquivo" disabled />
                <label className="avatar-btn btn" htmlFor="avatar">Buscar</label>
              </div>
              <input type="file" name="avatar" id="avatar" value={avatar} onChange={(evt) => handleSelectFile(evt) } required />
            </div>
          </div>
          
          <div className="row">
            <div className="col col-12">
              <label htmlFor="places">Locais onde trabalha <small>(separe com vírgula)</small></label>
              <input type="text" name="places" id="places" required />
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