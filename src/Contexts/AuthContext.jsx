import React, { createContext, useState } from 'react'

 export const AuthContext =  createContext()
const AuthProvider = ({children}) => {
const [users, setUsers] = useState([])

  return (
    <AuthContext.Provider value={{users, setUsers}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
