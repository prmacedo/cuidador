import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';

import AuthService from '../../../services/auth.service'
import PageHeader from '../../../components/PageHeader';

import Profile_icon from '../../../assets/images/icons/Vector_profile_icon.svg'
import Agenda_icon from '../../../assets/images/icons/Vector_agenda_icon.svg'
import Meta_icon from '../../../assets/images/icons/Vector_meta_icon.svg'
import News_icon from '../../../assets/images/icons/Vector_news_icon.svg'
import Charts_icon from '../../../assets/images/icons/Vector_charts_icon.svg'
import Cuidador_icon from '../../../assets/images/icons/Vector_cuidador_icon.svg'

import './styles.css';

function AppMenu() {

    const history = useHistory();

    const [userData, setUserData] = useState();


    useEffect(() => {
        (async () => {
            const { user: { first_name } } = AuthService.getCurrentUser()
            setUserData(first_name);

        })();
    }, []);



    return (
        <div id="page-menu-list" className="container">
            {userData &&
                <>
                    <PageHeader hideComeBack={true} hideLogout={false} />
                    <main>
                        <div className="user-greeting" >
                            <strong>Bem vindo, {userData}!</strong>
                        </div>
                        <div className="all-buttons">
                            <div className="buttons-container">
                                <NavLink to="/Perfil" className="study">
                                    <img src={Profile_icon} alt="Meu perfil icon"></img>
                                    <span>Meu perfil</span>
                                </NavLink>
                            </div>

                            <div className="buttons-container">
                                <NavLink to="/Avaliacao" className="study">
                                    <img src={Agenda_icon} alt="Agenda icon"></img>
                                    <span> Avaliação Diária</span>

                                </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/metas" className="study">
                                    <img src={Meta_icon} alt="Meta icon"></img>
                                    <span>Minhas Metas</span>

                                </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/educacao" className="study">
                                    <img src={News_icon} alt="Educação em dor icon"></img>
                                    <span>Educação em dor</span>

                                </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/meudesempenho" className="study">
                                    <img src={Charts_icon} alt="Meu desenpenho icon"></img>
                                    <span>Meu desempenho</span>

                                </NavLink>
                            </div>

                            <div className="buttons-container">
                                <NavLink to="/cuidadores" className="study">
                                    <img src={Cuidador_icon} alt="Cuidador icon"></img>
                                    <span>Cuidadores</span>

                                </NavLink>
                            </div>
                        </div>

                    </main>

                </>}
        </div>
    )
    // }



}

export default AppMenu;