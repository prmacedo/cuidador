import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";

import logoImg from "../../assets/images/logoAppWhite.svg";
import backIcon from "../../assets/images/icons/back.svg";

import API_URL from "../../services/api";
import AuthService from "../../services/auth.service";
import "./styles.css";

function SignUp() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [crmCode, setCRMCode] = useState('');
  const [crmText, setCRMText] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)})


  const handleRegisterUser = async (event) => {
    event.preventDefault();    
    
    if(password !== confirmPassword){
      alert("As senhas devem ser iguais!");
      return;
    }

    if (role == "pacient") {
      AuthService.patientRegister(
        email, 
        password, 
        firstName, 
        lastName, 
        birthday,
        cpf
      )
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro!");
      });

    } else if (role == "professional") {
      const crm = crmCode+'-'+crmText;
      AuthService.professionalRegister(
        email, 
        password, 
        firstName, 
        lastName, 
        birthday,
        cpf,
        crm        
      )
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro!");
      });
    }
  };

  return (
    <div id="page-cadastro" className="container">
      <header className="page-header">
        <Link to="/">
          <div className="top-bar-container">
            <img src={backIcon} alt="Voltar" />
            <span> Voltar</span>

          </div>
        </Link>

        <img src={logoImg} alt="Cuidador" />

      </header>

      <main>

        <div className="page-title">
          <strong >Cadastro</strong>
        </div>

        <form onSubmit={handleRegisterUser}>
          <fieldset>


            <div className="input-block">
              <label htmlFor="role">Papel</label>
              <select name="role" id="role" required value={role} onChange={(evt) => setRole(evt.target.value)}>
                <option value="">Selecione uma opção</option>
                <option value="pacient">Paciente</option>
                <option value="professional">Profissional</option>
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="cpf">CPF*</label>
              <input name="cpf" type="text" id="cpf" required maxLength="11" value={cpf} onChange={(evt) => setCPF(evt.target.value)}/>
            </div>

            {role == "professional" && (
              <>
                <div className="input-block">
                  <label htmlFor="crm">Código do Conselho</label>
                  <input type="text" id="crm" name="crm" required value={crmCode} onChange={(evt) => setCRMCode(evt.target.value)}/>
                </div>

                <div className="input-block">
                  <label htmlFor="sigla">Sigla do Conselho</label>
                  <input type="text" id="sigla" name="sigla" required value={crmText} onChange={(evt) => setCRMText(evt.target.value)} />
                </div>
              </>
            )}

            <div className="input-block">
              <label htmlFor="name">Nome*</label>
              <input type="text" id="name" name="firstName" required value={firstName} onChange={(evt) => setFirstName(evt.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="surname">Sobrenome*</label>
              <input type="text" id="surname" name="lastName" required value={lastName} onChange={(evt) => setLastName(evt.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="date">Data de Nascimento*</label>
              <input type="date" id="date" name="bornDate" required placeholder="DD/MM/AAAA" value={birthday} onChange={(evt) => setBirthday(evt.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required ref={register} value={email} onChange={(evt) => setEmail(evt.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha*</label>
              <input type="password" id="password" name="password" required value={password} onChange={(evt) => setPassword(evt.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="password">Confirmar senha*</label>
              <input type="password" id="confirm-password" required name="confirmPassword" value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)}/>
            </div>

          </fieldset>

          <footer>
            <button type="submit">Cadastrar</button>
          </footer>

        </form>
      </main>
    </div>
  );
}

export default SignUp;
