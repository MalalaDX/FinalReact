import { useMemo, useState, useEffect } from 'react'

export default function useFilterMovies(movies = []) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  /* Se ejecuta solo si detecta cambios */
  useEffect(() => {
    
  }, [movies, searchTerm, selectedGenres, selectedCategories])

  const toggleGenre = (genre) => {
    setSelectedGenres(prev => {
      const clean = genre ? genre.trim() : ''
      if (!clean) return prev
      return prev.includes(clean)
        ? prev.filter(g => g !== clean)
        : [...prev, clean]
    })
  }

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    )
  }

  const clearAll = () => {
    setSearchTerm('')
    setSelectedGenres([])
    setSelectedCategories([])
  }

  /* Filtrar peliculas */
  const filteredMovies = useMemo(() => {
    if (!Array.isArray(movies)) return []

    return movies.filter(movie => {
      const matchesSearch = !searchTerm ||
        (movie.busqueda &&
          movie.busqueda.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesGenre =
        selectedGenres.length === 0 ||
        (movie.gen && selectedGenres.includes(movie.gen.trim()))

      const matchesCategory =
        selectedCategories.length === 0 ||
        (movie.categoria && selectedCategories.includes(movie.categoria))

      return matchesSearch && matchesGenre && matchesCategory
    })
  }, [movies, searchTerm, selectedGenres, selectedCategories])

  const resultsCount = filteredMovies.length


  const genres = useMemo(() => {
    const setG = new Set()
    movies.forEach(m => {
      if (m.gen && m.gen.toString().trim() !== '') {
        setG.add(m.gen.toString().trim())
      }
    })
    return Array.from(setG).sort()
  }, [movies])

  return {
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
  }
}