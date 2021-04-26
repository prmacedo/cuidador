import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../../assets/styles/global.css';
import logoImg from '../../../assets/images/logoApp.svg';
import Doctor from '../../../assets/images/doctor.svg';

import API_URL from '../../../services/api';
import AuthService from '../../../services/auth.service'

// import './styles.css';
import '../../../assets/styles/login.css'



function LoginCuidadores() {


    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState();

    function handleCreateForm(e) {
        e.preventDefault()

        AuthService.professionalLogin(email, password).then(() => {
            history.push('/MainPage');
        }).catch(() => {
            alert('Erro! Usuário não cadastrado');
        })
    }


    useEffect(() => {
        (async () => {
            const logged = await AuthService.isAuthenticated()
            setUserData(logged)
            if (logged.role == "Pacient") {
                history.push('/appmenu');
            } else if (logged.role == "Professional") {
                history.push('/MainPage');
            }

        })();
    }, []);




    return (
        <div className="page-app">


            <div className="container">
                <div className="page-wrapper">
                    <div className="logo-container">
                        <img src={logoImg} alt="Teste" />
                        <h2>Para Profissionais</h2>

                    </div>
                    <img src={Doctor}
                        alt="Plataforma Teste"
                        className="hero-image"
                    />

                    <main>
                        <form onSubmit={handleCreateForm}>
                            <fieldset>
                                <div className="input-block email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="input-block input">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>
                            </fieldset>

                            <div className="buttons-container">
                                <button  >
                                    Entrar
                            </button>
                            </div>

                        </form>
                        <div className="buttons-container">
                            <button >
                                <Link to="/">
                                    Pacientes
                                </Link>
                            </button>
                        </div>

                    </main>



                    <div className="cadastro">
                        <Link to="/cadastro">
                            Ainda não tem conta? Cadastre-se
                    </Link>
                    </div>



                    <span className="footer">
                        Produzido por: E-brains Team
                </span>

                </div>
            </div>
        </div>

    );
    ;
}

export default LoginCuidadores;