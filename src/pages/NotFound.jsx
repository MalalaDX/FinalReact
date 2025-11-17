
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <div className="film-icon">🎬</div>
      <h2 className="error-message">PÁGINA NO ENCONTRADA</h2>
      <p className="error-description">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
        Puede que el contenido haya sido eliminado o la URL sea incorrecta.
      </p>
      <button
        className="back-home-btn"
        onClick={() => navigate('/')}
      >
        VOLVER AL INICIO
      </button>
    </div>
  )
}