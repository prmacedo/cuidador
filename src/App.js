import React from 'react';

import './assets/styles/global.css';

import CurrentPageContextProvider from './context/CurrentPage';
import HiddenSidebarContextProvider from './context/HiddenSidebar';
import LoginTypeProvider from './context/LoginType';
import ProfileContextProvider from './context/Profile';

import Routes from './routes';

function App() {
  return (
    <ProfileContextProvider>
      <CurrentPageContextProvider>
        <HiddenSidebarContextProvider>
          <LoginTypeProvider>
            <Routes />
          </LoginTypeProvider>
        </HiddenSidebarContextProvider>
      </CurrentPageContextProvider>
    </ProfileContextProvider>
  );
}

export default App;
