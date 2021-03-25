import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';

import API_URL from '../../services/api';
import AuthService from '../../services/auth.service'
import './styles.css';


function SignUp() {

  const history = useHistory();


  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCPF] = useState('');
  const [codigo, setCodigo] = useState('');
  const [papel, setPapel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateForm(e) {
    e.preventDefault()

    if (papel == 1) {
      AuthService.patientRegister(
        firstName,
        lastName,
        /*nascimento,
        cpf: Number(cpf),
        codigo,
        papel,*/
        email,
        password
      ).then(() => {

        alert('Cadastro realizado com sucesso!');
        history.push('/');
      }).catch(() => {
        alert('Erro no cadastro!');

        history.push('/');

      })
    }
    else if (papel == 2) {
      AuthService.professionalRegister(
        firstName,
        lastName,
        /*nascimento,
        cpf: Number(cpf),
        papel,*/
        email,
        codigo,
        password
      ).then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/LoginCuidador');
      }).catch(() => {
        alert('Erro no cadastro!');

        history.push('/LoginCuidador');

      })
    }



    console.log({
      firstName,
      lastName,
      nascimento,
      cpf,
      papel,
      email,
      password
    });
  }



  return (
    <div id="page-cadastro" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Cuidador" />
        </div>
        <div className="header-content">
          <strong>Cadastro</strong>
        </div>
      </header>

      <main>
        <form onSubmit={handleCreateForm}>
          <fieldset>
            <div className="input-block">
              <label htmlFor="id">Papel</label>
              <br></br>
              <select
                value={papel}
                onChange={(e) => { setPapel(e.target.value) }}>
                <optgroup>
                  <option value="" disabled hidden>Selecione uma opção</option>
                  <option value="1">Paciente</option>
                  <option value="2">Profissional</option>

                </optgroup>
              </select>
              {/* <button onClick={() => setShow(!show)}>{show ? "hide": "show"}</button> */}
            </div>

            <div className="input-block">
              <label htmlFor="id">CPF*</label>
              <input
                type="text"
                id="cpf"
                maxLength='11'
                value={cpf}
                onChange={(e) => { setCPF(e.target.value) }}
              />
            </div>

            {papel == 2 && (<div className="input-block">
              <label htmlFor="id">Código do Conselho</label>
              <input
                type="text"
                id="codigo"
                value={codigo}
                onChange={(e) => { setCodigo(e.target.value) }}
              />
            </div>)}

            <div
              className="input-block">
              <label htmlFor="name">Nome*</label>
              <input
                type="text"
                id="name"
                value={firstName}
                onChange={(e) => { setfirstName(e.target.value) }}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Sobrenome*</label>
              <input
                type="text"
                id="surname"
                value={lastName}
                onChange={(e) => { setlastName(e.target.value) }} />
            </div>

            <div className="input-block">
              <label htmlFor="date">Data de Nascimento*</label>
              <input
                type="date"
                id="date"
                value={nascimento}
                onChange={(e) => { setNascimento(e.target.value) }}
              />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha*</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className="input-block">
              <label htmlFor="password">Confirmar senha*</label>
              <input type="password" id="confirm-password" />
            </div>
          </fieldset>

          <footer>

            <button type="submit">
              Cadastrar
        </button>

          </footer>


          <span className="total-connections">
            Produzido por: E-brains Team
                </span>

        </form>

      </main>


    </div>
  )
}

export default SignUp;