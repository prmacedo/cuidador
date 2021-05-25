import React, { useRef } from "react";
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
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)})


  const handleRegisterUser = async (event) => {
    event.preventDefault();
    console.log(event)

    const formData = {
      role: event.target[1].value,
      cpf: event.target[2].value,
      firstName: event.target[3].value,
      lastName: event.target[4].value,
      bornDate: event.target[5].value,
      email: event.target[6].value,
      password: event.target[7].value,
      confirmPassword: event.target[8].value
    }
    const isValid = await schema.isValid(formData)
    // console.log(formData, isValid)
    if(!isValid){
      alert("dados invalidos!");
      return 
    }
    if (formData.role == "pacient") {
      AuthService.patientRegister(
        formData.email, 
        formData.password, 
        formData.firstName, 
        formData.lastName, 
        formData.bornDate
      )
        .then(() => {
          alert("Cadastro realizado com sucesso!");


          // history.push('/appmenu');
          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro!");

          // history.push("/");
        });
    } else if (formData.role == "professional") {
      AuthService.professionalRegister(
        formData.email, 
        formData.password, 
        formData.firstName, 
        formData.lastName, 
        formData.bornDate
     
      )
        .then(() => {
          alert("Cadastro realizado com sucesso!");

          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro!");
          // history.push('/MainPage');
          // history.push("/LoginCuidador");
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
              <label htmlFor="id">Papel</label>
              <select name="paper">
                <option value="">Selecione uma opção</option>
                <option value="pacient">Paciente</option>
                <option value="professional">Profissional</option>
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="id">CPF*</label>
              <input name="cpf" type="text" id="cpf" maxlength="11"/>
            </div>

            {/* {selectedPaper == "professional" && (
              <div className="input-block">
                <label htmlFor="id">Código do Conselho</label>
                <input type="text" id="codigo" name="code" />
              </div>
            )} */}

            <div className="input-block">
              <label htmlFor="name">Nome*</label>
              <input type="text" id="name" name="firstName"/>
            </div>

            <div className="input-block">
              <label htmlFor="name">Sobrenome*</label>
              <input type="text" id="surname" name="lastName"/>
            </div>

            <div className="input-block">
              <label htmlFor="date">Data de Nascimento*</label>
              <input type="date" id="date" name="bornDate" placeholder="DD/MM/AAAA"/>
            </div>

            <div className="input-block">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email"ref={register} />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha*</label>
              <input type="password" id="password" name="password"/>
            </div>

            <div className="input-block">
              <label htmlFor="password">Confirmar senha*</label>
              <input type="password" id="confirm-password" name="confirmPassword" />
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
