import React from 'react';
import './App.css';
import CurrentPageContextProvider from './context/CurrentPage';
import HiddenSidebarContextProvider from './context/HiddenSidebar';
import ProfileContextProvider from './context/Profile';
import Routes from './routes';

function App() {
  return (
    <ProfileContextProvider>
      <CurrentPageContextProvider>
        <HiddenSidebarContextProvider>
          <Routes />
        </HiddenSidebarContextProvider>
      </CurrentPageContextProvider>
    </ProfileContextProvider>
  );
}

export default App;
