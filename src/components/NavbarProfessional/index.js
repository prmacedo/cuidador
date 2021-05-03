import React, { useEffect, useState } from 'react';

import menu from '../../assets/images/icons/toggle-menu.svg';
import recentMail from '../../assets/images/icons/recent-mail.svg';
import arrowDown from '../../assets/images/icons/arrow-down.svg';
import profilePic from '../../assets/images/icons/profile-user.svg';
import logout from '../../assets/images/icons/logout-preto.svg';
import profileIcon from '../../assets/images/icons/profile.svg';

import { useProfile } from '../../context/Profile';
import { useCurrentPage } from '../../context/CurrentPage';
import { useHiddenSidebar } from '../../context/HiddenSidebar';

import './styles.css';

export default function NavbarProfessional() {
  const [recentChatsData, setRecentChatsData] = useState([]);

  const { profile } = useProfile();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { hideSidebar, setHideSidebar } = useHiddenSidebar();

  useEffect(() => {
    setRecentChatsData([
      {
        name: 'José Freitas',
        city: 'Riachão do Jacuípe',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'Antônio Carlos Pereira Magalhães',
        city: 'Salvador',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'José Freitas',
        city: 'Riachão do Jacuípe',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'Antônio Carlos Pereira Magalhães',
        city: 'Salvador',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'José Freitas',
        city: 'Riachão do Jacuípe',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'Antônio Carlos Pereira Magalhães',
        city: 'Salvador',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'José Freitas',
        city: 'Riachão do Jacuípe',
        state: 'Bahia',
        avatar: profilePic
      },
      {
        name: 'Antônio Carlos Pereira Magalhães',
        city: 'Salvador',
        state: 'Bahia',
        avatar: profilePic
      },
    ]);
  }, []);

  function toggleOptionsDropdown() {
    document.querySelector('#options-profile').classList.toggle('hide');
    document.querySelector('#recent-chats').classList.add('hide');
  }

  function toggleRecentChats() {
    document.querySelector('#recent-chats').classList.toggle('hide');
    document.querySelector('#options-profile').classList.add('hide');
  }

  function handleHideSidebar() {
    setHideSidebar(!hideSidebar);
  }

  function redirectToProfile() {
    setCurrentPage('Meu Perfil');
  }

  return (
    <nav id="navbarProfessional">
      <div>
        <img src={menu} className="menu" alt="Menu" onClick={() => { handleHideSidebar() }} />
        <h2>{currentPage}</h2>
      </div>

      <div>
        <div className="recent">
          <div className="content" onClick={() => toggleRecentChats()}>
            <img src={recentMail} alt="Conversas recentes" />
          </div>

          <div id="recent-chats" className="hide">
            <h3>Chats Recentes</h3>
            <hr/>
            {recentChatsData.length ?
            <div className="scroll">
              {recentChatsData.map((item, index) => (
                <div className="chat" key={index}>                    
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <span>{item.name}</span>
                    <span>{item.city}, {item.state}</span>
                  </div>
                </div>
              ))}
            </div>
              :
            <span>Não há mensagem nos últimos 2 dias.</span>
            }
          </div>
        </div>

        <div className="profile">
          <div className="content" onClick={() => toggleOptionsDropdown()}>
            <img src={profilePic} alt={profile.avatar} />
            <span>{profile.name}</span>
            <img src={arrowDown} alt="Opções" />
          </div>

          <div id="options-profile" className="hide">
            <span onClick={ () => { redirectToProfile(); }}>
              <img src={profileIcon} alt="Meu Perfil" />
              Meu Perfil
            </span>
            <span>
              <img src={logout} alt="Sair" />
              Sair
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}