/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'

/* Contexto de autenticacion */
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    /* Intentar obtener el usuario del  localStorage */
    try {
      const u = localStorage.getItem('usuario')
      return u ? JSON.parse(u) : null
    } catch {
      return null
    }
  })
 
  /* Guardamos el usuario en localstorage */
  useEffect(() => {
    if (user) {
      localStorage.setItem('usuario', JSON.stringify(user))
    } else {
      localStorage.removeItem('usuario')
    }
  }, [user])

  const login = (userObj) => setUser(userObj)
  const logout = () => setUser(null)
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
