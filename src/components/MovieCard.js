import React, { useState } from 'react';
import Character from './Character';
import './MovieCard.css';

function MovieCard({ movie }) {
  const [showCharacters, setShowCharacters] = useState(false);

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p><u>Release Date:</u> {movie.release_date}</p>
      <p><u>Opening Crawl:</u> {movie.opening_crawl}</p>
      <p><u>Director:</u> {movie.director}</p>
      <p><u>Producer(s):</u> {movie.producer}</p>
      <button onClick={() => setShowCharacters(!showCharacters)}>
        {showCharacters ? 'Hide Characters' : 'Show Characters'}
      </button>
      {showCharacters && (
        <div className="character-list">
          {movie.characters.map((characterUrl, index) => (
            <Character key={index} url={characterUrl} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieCard;
