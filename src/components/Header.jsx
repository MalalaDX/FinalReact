/* Seccion del Header */
import Login from './Login'

export default function Header() {
  return (
    <header>
      <div className="title">
        <h1 className="red-text logo-title">TRAILERFLIX</h1>
      </div>
      <div className="login-container">
        <Login />
      </div>
    </header>
  )
}