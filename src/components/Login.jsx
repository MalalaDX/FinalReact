/* Seccion del login */
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const { user, logout, validateUser, loading, error } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos')
      return
    }
    await validateUser(username.trim(), password.trim())
    setUsername('')
    setPassword('')
  }

  if (user) {
    return (
      <div id="userInfo" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span id="userNameDisplay">Bienvenido, {user.firstName || user.username}</span>
        <button id="logoutBtn" onClick={logout}>Cerrar sesión</button>
      </div>
    )
  }

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <input type="text" id="username" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="password" id="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}