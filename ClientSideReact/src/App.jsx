import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    <Router>
      <div className="main-container">
        <header className="app-header">
          <h1>Rick & Morty 'Pedia</h1>
        </header>
        {}
        <div className="content-container">
          <Home />
          <MainPage />
        </div>

        <Routes>
          <Route path="/characters" element={<CharacterList characters={characterList} />} />
          <Route path="/episodes" element={<EpisodeList episodes={episodeList} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h3>Welcome to the Rick & Morty 'Pedia! Use the buttons below to explore characters and episodes.</h3>
    </div>
  );
}

function MainPage() {
  return (
    <div className="image-buttons-container">
      <div className="section">
        <h2>Characters</h2>
        <Link to="/characters">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUYCDUJcsNUaS_DoM4XwckLidHHn24mrRg&s"
            alt="Characters"
            className="image-button"
          />
        </Link>
      </div>
      <div className="section">
        <h2>Episodes</h2>
        <Link to="/episodes">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-cGpMR6jpAiozxiS5Xb8Q-yChvxLcz4_0w&s"
            alt="Episodes"
            className="image-button"
          />
        </Link>
      </div>
    </div>
  );
}

function CharacterList({ characters }) {
  return (
    <div className="character-container">
      <h2>Characters</h2>
      <div className="character-list">
        {characters.length === 0 ? (
          <p>Loading characters...</p>
        ) : (
          characters.map(character => <CharacterCard key={character.id} character={character} />)
        )}
      </div>
    </div>
  );
}

function EpisodeList({ episodes }) {
  return (
    <div className="episode-container">
      <h2>Episodes</h2>
      <div className="episode-list">
        {episodes.length === 0 ? (
          <p>Loading episodes...</p>
        ) : (
          episodes.map(episode => <EpisodeCard key={episode.id} episode={episode} />)
        )}
      </div>
    </div>
  );
}

export default App;


