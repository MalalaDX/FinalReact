# Trailerflix - Migración a React + Vite

## Estructura del Proyecto
- public/data/trailerflix.json
- public/data/usuarios.json
- public/posters/
  - movie1.jpg
  - movie2.jpg
  - ...
- src/
  - components/
    - Header.jsx
    - Login.jsx
    - MovieCard.jsx
    - SearchBar.jsx
    - Filters.jsx
  - context/
    - AuthContext.jsx
  - hooks/
    - useAuth.js
    - useFilterMovies.js
  - pages/
    - Home.jsx
    - MovieDetail.jsx
    - NotFound.jsx
  - App.jsx
  - main.jsx
  - style.css

## Ejecutar
1. `npm install`
2. `npm run dev`
3. Abrir el puerto que indique Vite en el navegador (normalmente http://localhost:5173)
4. ¡Disfruta de Trailerflix!

## Testing
-Filtros
![alt text](image.png)

-Filtros combinados
![alt text](image-1.png)

-Filtro de peliculas o series
![alt text](image-3.png)

-Búsqueda
![alt text](image-2.png)

-Login
![alt text](image-4.png)