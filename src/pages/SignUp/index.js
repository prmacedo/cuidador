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

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema), 
  });

  const password = useRef({});
  password.current = watch("password", "");
  const selectedPaper = watch("paper");

  const handleRegisterUser = ({
    paper,
    cpf,
    firstName,
    lastName,
    bornDate,
    email,
    code,
    password,
    confirmPassword,
  }) => {

    if (selectedPaper == "pacient") {
      AuthService.patientRegister(
        firstName,
        lastName,
        email,
        password
      )
        .then(() => {
          alert("Cadastro realizado com sucesso!");
          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro!");

          history.push("/");
        });
    } else if (selectedPaper == "professional") {
      AuthService.professionalRegister(
        firstName,
        lastName,
        bornDate,
        Number(cpf),
        paper,
        email,
        password
      )
        .then(() => {
          alert("Cadastro realizado com sucesso!");

          history.push("/LoginCuidador");
        })
        .catch(() => {
          alert("Erro no cadastro!");

          history.push("/LoginCuidador");
        });
    }
  };

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
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <fieldset>
            <div className="input-block">
              <label htmlFor="id">Papel</label>
              <select
                name="paper"
                ref={register({
                  required: true,
                })}
              >
                <option value="">Selecione uma opção</option>
                <option value="pacient">Paciente</option>
                <option value="professional">Profissional</option>
              </select>
              {/* <button onClick={() => setShow(!show)}>{show ? "hide": "show"}</button> */}
            </div>
            {errors.paper?.message}
            <div className="input-block">
              <label htmlFor="id">CPF*</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                ref={register({
                  required: true,
                })}
              />
              {errors.cpf?.message}
            </div>

            {selectedPaper == "professional" && (
              <div className="input-block">
                <label htmlFor="id">Código do Conselho</label>
                <input
                  type="text"
                  id="codigo"
                  name="code"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.code?.message}
              </div>
            )}

            <div className="input-block">
              <label htmlFor="name">Nome*</label>
              <input
                type="text"
                id="name"
                name="firstName"
                ref={register({
                  required: true,
                })}
              />
              {errors.firstName?.message}
            </div>

            <div className="input-block">
              <label htmlFor="name">Sobrenome*</label>
              <input
                type="text"
                id="surname"
                name="lastName"
                ref={register({
                  required: true,
                })}
              />
              {errors.lastName?.message}
            </div>

            <div className="input-block">
              <label htmlFor="date">Data de Nascimento*</label>
              <input
                type="text"
                id="date"
                name="bornDate"
                placeholder="DD/MM/AAAA"
                ref={register({
                  required: true,
                })}
              />
              {errors.bornDate?.message}
            </div>

            <div className="input-block">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={register({
                  required: true,
                })}
              />
              {errors.email?.message}
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha*</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={register({
                  required: true,
                })}
              />
              {errors.password?.message}
            </div>

            <div className="input-block">
              <label htmlFor="password">Confirmar senha*</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                ref={register({
                  required: true,
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.confirmPassword?.message}
            </div>
          </fieldset>

          <footer>
            <button type="submit">Cadastrar</button>
          </footer>

          <span className="total-connections">
            Produzido por: E-brains Team
          </span>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
