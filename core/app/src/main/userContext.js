import React, { useState, createContext } from 'react';

const defaultValue = { user: JSON.parse(localStorage.getItem('calcifer-user-data') || '{}') };
export const userContext = createContext(defaultValue );

export default function UserProvider({ children }) {
  const [ userData, setUserData ] = useState(defaultValue.user);

  return (
    <userContext.Provider value={{ user: userData, setUserData }}>
      { children }
    </userContext.Provider>
  )
}

