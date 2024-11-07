import { useState, useEffect } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import EpisodeCard from './EpiCard';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(false);

  
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

  const showCharacterSection = () => {
    setShowCharacters(true);
    setShowEpisodes(false);
  };

  const showEpisodeSection = () => {
    setShowEpisodes(true);
    setShowCharacters(false);
  };

  return (
    <div>
      <header className="app-header">
        <h1>Rick & Morty 'Pedia</h1>
      </header>

      {/* buttons for Characters and Episodes */}
      <div className="image-buttons-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUYCDUJcsNUaS_DoM4XwckLidHHn24mrRg&s" 
          alt="Characters"
          className="image-button"
          onClick={showCharacterSection}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-cGpMR6jpAiozxiS5Xb8Q-yChvxLcz4_0w&s" 
          alt="Episodes"
          className="image-button"
          onClick={showEpisodeSection}
        />
      </div>

      {/* Characters */}
      {showCharacters && (
        <div className="character-container">
          <h2>Characters</h2>
          <div className="character-list">
            {characterList.length === 0 ? (
              <p>Loading characters...</p>
            ) : (
              characterList.map((character) => (
                <div key={character.id} className="character-card">
                  <img src={character.image} alt={character.name} className="character-image" />
                  <h3>{character.name}</h3>
                  <p>Status: {character.status}</p>
                  <p>Species: {character.species}</p>
                  <p>Origin: {character.origin.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Episodes*/}
      {showEpisodes && (
        <div className="episode-container">
          <h2>Episodes</h2>
          <div className="episode-list">
            {episodeList.length === 0 ? (
              <p>Loading episodes...</p>
            ) : (
              episodeList.map((episode) => (
                <div key={episode.id} className="episode-card">
                  <h3>{episode.name}</h3>
                  <p>Air Date: {episode.air_date}</p>
                  <p>Episode: {episode.episode}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
