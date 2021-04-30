import React, { createContext, useContext, useState } from 'react';

const CurrentPageContext = createContext();

export default function CurrentPageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('Pacientes');

  return (
    <CurrentPageContext.Provider
      value={{
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </CurrentPageContext.Provider>
  );
}

export function useCurrentPage() {
  const context = useContext(CurrentPageContext);
  const { currentPage, setCurrentPage } = context;
  return { currentPage, setCurrentPage };
}