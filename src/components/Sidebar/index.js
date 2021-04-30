import React, { useEffect } from 'react';

import logoWhite from '../../assets/images/logoAppWhite.svg';
import profilePic from '../../assets/images/icons/profile-user.svg';
import medkit from '../../assets/images/icons/medkit.svg';
import chat from '../../assets/images/icons/chat.svg';

import { useProfile } from '../../context/Profile';
import { useCurrentPage } from '../../context/CurrentPage';
import { useHiddenSidebar } from '../../context/HiddenSidebar';

import './styles.css';

export default function Sidebar() {
  const { profile } = useProfile();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { hideSidebar } = useHiddenSidebar();

  useEffect(() => {
    if (hideSidebar) {
      document.querySelector('#sidebar').style.marginLeft = "-30rem"      
    } else {
      document.querySelector('#sidebar').style.marginLeft = "0"      
    }
  }, [hideSidebar]);

  function redirectToPacients() {
    setCurrentPage('Pacientes');
  }

  function redirectToChat() {
    setCurrentPage('Chat Interprofissional');
  }

  return(
    <aside id="sidebar">
      <img src={logoWhite} className="logo" alt="Cuidador"/>

      <img src={profile.avatar} className="profilePic" alt={profile.name}/>

      <p className="welcome">Bem-vindo<br/>{profile.name}</p>

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