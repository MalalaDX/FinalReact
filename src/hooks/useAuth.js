/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useAuth() {
  const { user, login, logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const validateUser = async (username, password) => {
    setLoading(true)
    setError(null)
    /* Simular llamada a API */
    try {
      const res = await fetch('/data/usuarios.json')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const datos = await res.json()
      console.log(datos);
      
      const found = (datos.users || []).find(
        u => u.username === username && u.password === password
      )
      if (found) {
        login({ username: found.username, firstName: found.firstName || found.username, role: found.role || 'user' })
        setLoading(false)
        return true
      } else {
        setError('Usuario o contraseña incorrectos')
        setLoading(false)
        return false
      }
    } catch (err) {
      setError('Error al validar usuario')
      setLoading(false)
      return false
    }
  }

  return { user, login, logout, validateUser, loading, error }
}
