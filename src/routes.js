
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './services/ProtectedRoute';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import AppMenu from './pages/Patient/AppMenu';
import Avaliacao from './pages/Patient/Avaliacao/index';
import Cuidadores from './pages/Patient/Cuidadores';
import Educacao from './pages/Patient/Educação';
import Metas from './pages/Patient/Metas';
import MeuDesempenho from './pages/Patient/MeuDesempenho';
import Perfil from './pages/Patient/Perfil';
import Perfiledit from './pages/Patient/Perfil/perfilEdit';

import MainPage from './pages/Profissional/MainPage';
import InfoPatient from './pages/Profissional/InfoPatient';
import Goals from './pages/Profissional/Goals';
import ProfessionalProfile from './pages/Profissional/Profile';
import UpdateProfessionalProfile from './pages/Profissional/UpdateProfile';
import {ChatProfessional} from './pages/Profissional/ChatProfessional';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Cadastro" component = {SignUp} />
        
        <ProtectedRoute path="/AppMenu" component={AppMenu} type="Patient" />
        <ProtectedRoute path="/Avaliacao" component={Avaliacao} type="Patient" />
        <ProtectedRoute path="/Perfil" component={Perfil} type="Patient" />
        <ProtectedRoute path="/Perfiledit" component={Perfiledit} type="Patient" />
        <ProtectedRoute path="/Cuidadores" component={Cuidadores} type="Patient" />
        <ProtectedRoute path="/metas" component={Metas} type="Patient" />
        <ProtectedRoute path="/meudesempenho" component={MeuDesempenho} type="Patient" />
        <ProtectedRoute path="/educacao" component={Educacao} type="Patient" />

        <ProtectedRoute path="/MainPage" component={MainPage} type="Professional" />
        <ProtectedRoute path="/paciente/:id" component={InfoPatient} type="Professional" />
        <ProtectedRoute path="/goals/:id" component={Goals} type="Professional" />
        <ProtectedRoute path="/MeuPerfil" component={ProfessionalProfile} type="Professional" />
        <ProtectedRoute path="/AtualizarPerfil" component={UpdateProfessionalProfile} type="Professional" />
        <ProtectedRoute path="/Chat" component={ChatProfessional} type="Professional" />
      </Switch>
    </BrowserRouter>
  );
}

