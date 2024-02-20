import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const userContext = createContext(null);

const UserContextProvider = ({children}) => {
  
  return (
    <userContext.Provider value={{children}}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
