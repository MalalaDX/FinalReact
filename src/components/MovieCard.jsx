/* Seccion de datos de pelicula */

import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  const { id, poster, titulo, categoria } = movie
  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        <div className="card-picture">
          <img src={poster} alt={titulo} title={titulo} />
        </div>
        <div className="card-bottom">
          <p className="card-bottom-title">{titulo}</p>
          <p>{categoria}</p>
        </div>
      </Link>
    </div>
  )
}