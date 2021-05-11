import React from 'react';

import NavbarProfessional from '../NavbarProfessional';
import Sidebar from '../Sidebar';

import CurrentPageContextProvider from '../../context/CurrentPage';
import HiddenSidebarContextProvider from '../../context/HiddenSidebar';
import ProfileContextProvider from '../../context/Profile';

import './styles.css';

export default function ProfessionalContainer({ children }) {
  return (
          <div className="wrapper">
            <Sidebar />
            <main>
              <NavbarProfessional />
              <div className="content">
                { children }
              </div>
            </main>
          </div>
    
  );
}