/* Filtros de busqueda */

export default function Filters({
  genres,
  toggleGenre,
  selectedGenres,
  toggleCategory,
  selectedCategories,
  clearAll,
}) {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label className="filter-label">Género:</label>
        <div id="genreFilters" className="filter-buttons">
          {genres.map((gen) => (
            <button
              key={gen}
              className={`filter-btn ${
                selectedGenres.includes(gen) ? "active" : ""
              }`}
              data-genre={gen}
              onClick={() => toggleGenre(gen)}
            >
              {gen}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Categoría:</label>
        <div id="categoryFilters" className="filter-buttons">
          <button
            className={`filter-btn ${
              selectedCategories.includes("Película") ? "active" : ""
            }`}
            data-category="Película"
            onClick={() => toggleCategory("Película")}
          >
            Película
          </button>
          <button
            className={`filter-btn ${
              selectedCategories.includes("Serie") ? "active" : ""
            }`}
            data-category="Serie"
            onClick={() => toggleCategory("Serie")}
          >
            Serie
          </button>
        </div>
      </div>

      <button id="clearFilters" className="clear-btn" onClick={clearAll}>
        Limpiar Filtros
      </button>
    </div>
  );
}
