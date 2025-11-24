import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Star Wars Movie Catalog</h1>
        <input
          type="text"
          placeholder="Search by film name..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="movie-grid">
        {movies
          .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(movie => (
            <MovieCard key={movie.episode_id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;
