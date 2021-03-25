import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';

import AuthService from '../../../services/auth.service'
import PageHeader from '../../../components/PageHeader';

import './styles.css';

function AppMenu() {

    const history = useHistory();

    const [userData, setUserData] = useState();


    useEffect(() => {
        (async () => {
            const { user: { firstName } } = AuthService.getCurrentUser()
            setUserData(firstName);
        })();
    }, []);


    
    return (
        <div id="page-menu-list" className="container">
            {userData &&
                <>
                    <PageHeader name={userData} />
                    <main>
                        <div className="all-buttons">
                            <div className="buttons-container">
                                <NavLink to="/Perfil" className="study">
                                    Meu perfil
                            </NavLink>
                            </div>
                            
                            <div className="buttons-container">
                                <NavLink to="/Avaliacao" className="study">
                                    Avaliação Diária
                            </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/metas" className="study">
                                    Minhas Metas
                            </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/educacao" className="study">
                                    Educação em dor
                            </NavLink>
                            </div>
                            <div className="buttons-container">
                                <NavLink to="/meudesempenho" className="study">
                                    Meu desempenho
                            </NavLink>
                            </div>

                            <div className="buttons-container">
                                <NavLink to="/cuidadores" className="study">
                                    Cuidadores
                            </NavLink>
                            </div>
                        </div>

                    </main>
                    <span className="total-connections">
                        Produzido por: E-brains Team
            </span>
                </>}
        </div>
    )
    // }



}

export default AppMenu;