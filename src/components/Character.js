import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Character.css';

function Character({ url }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setCharacter(response.data))
      .catch(error => console.error('Error fetching character:', error));
  }, [url]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <div className="character-details">
        <p><u>Height:</u> {character.height} cm</p>
        <p><u>Mass:</u> {character.mass} kg</p>
        <p><u>Hair Color:</u> {character.hair_color}</p>
        <p><u>Skin Color:</u> {character.skin_color}</p>
        <p><u>Eye Color:</u> {character.eye_color}</p>
        <p><u>Birth Year:</u> {character.birth_year}</p>
      </div>
    </div>
  );
}

export default Character;
