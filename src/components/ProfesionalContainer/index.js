import React from 'react';

import NavbarProfesional from '../../components/NavbarProfesional';
import Sidebar from '../../components/Sidebar';

import CurrentPageContextProvider from '../../context/CurrentPage';
import HiddenSidebarContextProvider from '../../context/HiddenSidebar';
import ProfileContextProvider from '../../context/Profile';

import './styles.css';

export default function ProfesionalContainer({ children }) {
  return (
    <ProfileContextProvider>
      <CurrentPageContextProvider>
        <HiddenSidebarContextProvider>
          <div className="wrapper">
            <Sidebar />
            <main>
              <NavbarProfesional />
              <div className="content">
                { children }
              </div>
            </main>
          </div>
        </HiddenSidebarContextProvider>
      </CurrentPageContextProvider>
    </ProfileContextProvider>
  );
}