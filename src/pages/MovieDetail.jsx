import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        /* Cargar peliculas desde JSON */
        const response = await fetch('/data/trailerflix.json');
        const data = await response.json();
        console.log(data);
        
        const selectedMovie = data.find((item) => item.id === Number(id));
        setMovie(selectedMovie);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p className="loading">Cargando...</p>;
  }


  const posterPath = movie.poster.replace('./posters/', '/posters/');

  return (
    <main className="movie-page-container">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Volver al catálogo
      </button>

      <div className="movie-details">
        <div className="movie-poster">
          <img src={posterPath} alt={movie.titulo} />
        </div>

        <div className="movie-info">
          <h2>{movie.titulo}</h2>
          <p><strong>Categoría:</strong> {movie.categoria}</p>
          <p><strong>Género:</strong> {movie.genero}</p>
          <p><strong>Reparto:</strong> {movie.reparto}</p>
          <p>{movie.resumen}</p>

          <iframe
            src={movie.trailer}
            title={movie.titulo}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;