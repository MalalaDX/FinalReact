import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import MovieCard from '../components/MovieCard'
import useFilterMovies from '../hooks/useFilterMovies'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)

  
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      /* Cargar peliculas desde JSON */
      try {
        const res = await fetch('/data/trailerflix.json')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const arr = Array.isArray(data) ? data : (data.movies || data)
        setMovies(arr)
        setLoading(false)
      } catch (err) {
        console.error('Error al cargar películas:', err)
        setLoadError('Error al cargar películas')
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  // Hook de filtrado y busqueda
  const {
    searchTerm,
    setSearchTerm,
    selectedGenres,
    selectedCategories,
    filteredMovies,
    toggleGenre,
    toggleCategory,
    clearAll,
    resultsCount,
    genres
  } = useFilterMovies(movies)

  return (
    <main>
      {/* Seccion  de busqueda y filtros */}
      <section className="search-filters-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Filters
          genres={genres}
          toggleGenre={toggleGenre}
          selectedGenres={selectedGenres}
          toggleCategory={toggleCategory}
          selectedCategories={selectedCategories}
          clearAll={clearAll}
        />

        {/* Contador con los resultados */}
        <div
          id="resultsCount"
          className="results-count"
          style={{
            display:
              searchTerm || selectedGenres.length > 0 || selectedCategories.length > 0
                ? 'block'
                : 'none'
          }}
        >
          {`Se encontraron ${resultsCount} resultado${resultsCount !== 1 ? 's' : ''}`}
        </div>
      </section>

      {/* Contenedor principal */}
      <article className={`container ${loading ? 'loading' : ''}`}>
        {loading && <div className="loader"></div>}

        {!loading && loadError && (
          <div className="error">
            <h2 className="red-text">{loadError}</h2>
          </div>
        )}

        {!loading && !loadError && filteredMovies.length === 0 && (
          <div className="error">
            <h2 className="red-text">No se encontraron resultados</h2>
            <p>Intenta con otros términos de búsqueda o filtros diferentes 🍿</p>
          </div>
        )}


        {!loading && !loadError && filteredMovies.length > 0 && (
          Object.entries(
            filteredMovies.reduce((acc, mov) => {
              const gen = mov.gen ? mov.gen.trim() : 'Sin género'
              if (!acc[gen]) acc[gen] = []
              acc[gen].push(mov)
              return acc
            }, {})
          ).map(([gen, items]) => (
            <section key={gen}>
              <article className="genero">
                <h2>{gen}</h2>
              </article>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {items.map((m) => (
                  <MovieCard key={m.id} movie={m} />
                ))}
              </div>
            </section>
          ))
        )}
      </article>
    </main>
  )
}