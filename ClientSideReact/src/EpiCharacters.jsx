import { useState, useEffect } from 'react';
import './App.css';

function EpisodeCharacters({ id }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => response.json())
        .then(data => {
          return Promise.all(data.characters.map(url => fetch(url).then(res => res.json())));
        })
        .then(characterData => {
          setCharacters(characterData);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching episode characters:', error));
    }
  }, [id]);

  if (loading) {
    return <p>Loading characters...</p>;
  }

  return (
    <div className="character-list">
      {characters.map(character => (
        <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} className="character-image" />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}

export default EpisodeCharacters;
