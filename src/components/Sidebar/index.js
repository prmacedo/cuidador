import React, { useEffect } from 'react';

import logoWhite from '../../assets/images/logoAppWhite.svg';
import medkit from '../../assets/images/icons/medkit.svg';
import chat from '../../assets/images/icons/chat.svg';

import { useProfile } from '../../context/Profile';
import { useCurrentPage } from '../../context/CurrentPage';
import { useHiddenSidebar } from '../../context/HiddenSidebar';

import './styles.css';
import { useHistory } from 'react-router';

export default function Sidebar() {
  const { profile } = useProfile();
  const { currentPage } = useCurrentPage();
  const { hideSidebar } = useHiddenSidebar();

  const history = useHistory();

  useEffect(() => {
    if (hideSidebar) {
      document.querySelector('#sidebar').style.marginLeft = "-30rem"      
    } else {
      document.querySelector('#sidebar').style.marginLeft = "0"      
    }
  }, [hideSidebar]);

  function redirectToPacients() {
    history.push('/MainPage');
  }

  function redirectToChat() {
    
  }

  return(
    <aside id="sidebar">
      <img src={logoWhite} className="logo" alt="Cuidador"/>

      <img src={(profile?.avatar)} className="profilePic" alt={`${profile?.first_name} ${profile?.last_name}`}/>

      <p className="welcome">Bem-vindo<br/>
        {(profile?.gender === "Masculino") ? "Dr " : (profile?.gender === "Feminino") ? "Drª " : ""}
        {profile?.first_name} {profile?.last_name}
      </p>

      <hr/>

      <div
        className={`item-group ${(currentPage === 'Pacientes' || currentPage === 'Metas')?'active':''}`}
        onClick={ () => redirectToPacients() }
      >
        <img src={medkit} alt="Pacientes"/>
        <span>Pacientes</span>
      </div>

      <div
        className={`item-group ${(currentPage === 'Chat Interprofissional') ? 'active' : ''}`} 
        onClick={ () => redirectToChat() }
      >
        <img src={chat} alt="Chat Interprofissional" />
        <span>Chat Interprofissional</span>
      </div>

    </aside>
  )
}