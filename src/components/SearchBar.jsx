/* Estructura de la barra de navegacion */
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        className="search-input"
        placeholder="Buscar películas y series..."
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}
