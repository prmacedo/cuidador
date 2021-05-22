import React, { createContext, useContext, useEffect, useState } from 'react';

const LoginTypeContext = createContext();

export default function LoginTypeProvider({ children }) {
  const [loginType, setLoginType] = useState('Patient');
  const [selectedUserType, setSelectedUserType] = useState("Paciente");
  const [notSelectedUserType, setNotSelectedUserType] = useState({ type: "Professional", label: "Cuidador" });
  
  useEffect(() => {
    setSelectedUserType(loginType === "Patient" ? "Paciente" : "Cuidador");
    setNotSelectedUserType(
      loginType === "Patient"
        ? { type: "Professional", label: "Cuidador" }
        : { type: "Patient", label: "Paciente" }
    );
  }, [loginType]);

  return (
    <LoginTypeContext.Provider
      value={{
        loginType, 
        setLoginType,
        selectedUserType,
        notSelectedUserType
      }}
    >
      { children }
    </LoginTypeContext.Provider>
  );
}

export function useLoginType() {
  const context = useContext(LoginTypeContext);
  const { loginType, setLoginType, selectedUserType, notSelectedUserType } = context;
  return { loginType, setLoginType, selectedUserType, notSelectedUserType };
}