import { useState, useEffect } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import EpisodeCard from './EpiCard';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacterList(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => setEpisodeList(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <header className="app-header">
        <h1>Rick and Morty 'pedia</h1>
      </header>
      <h2>Characters:</h2>
      <div className="character-list">
        {characterList.length === 0 ? (
          <h3>Loading characters...</h3>
        ) : (
          characterList.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>

      <h2>Episodes:</h2>
      <div className="episode-list">
        {episodeList.length === 0 ? (
          <h3>Loading episodes...</h3>
        ) : (
          episodeList.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
