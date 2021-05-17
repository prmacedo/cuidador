import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// Apagar esta linha depois
import profilePic from '../../assets/images/icons/profile-user.svg';

const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))?.user;
    setProfile(user);
  }, []);

  function logout() {
    setProfile(null);
    localStorage.clear();
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        logout
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  const { profile, setProfile, logout } = context;
  return { profile, setProfile, logout };
}