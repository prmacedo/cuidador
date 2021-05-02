import React, { createContext, useContext, useState } from 'react';

const HiddenSidebarContext = createContext();

export default function HiddenSidebarContextProvider({ children }) {
  const [hideSidebar, setHideSidebar] = useState(false);
  
  return (
    <HiddenSidebarContext.Provider 
      value={{
        hideSidebar,
        setHideSidebar
      }}
    >
      {children}
    </HiddenSidebarContext.Provider>
  );
}

export function useHiddenSidebar() {
  const context = useContext(HiddenSidebarContext);
  const { hideSidebar, setHideSidebar } = context;
  return { hideSidebar, setHideSidebar };
}