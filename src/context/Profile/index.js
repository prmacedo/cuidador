import React, { createContext, useContext, useEffect, useState } from 'react';

// Apagar esta linha depois
import profilePic from '../../assets/images/icons/profile-user.svg';

const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile({
      name: 'Drª Roberta Galvão',
      avatar: profilePic
    });
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  const { profile, setProfile } = context;
  return { profile, setProfile };
}