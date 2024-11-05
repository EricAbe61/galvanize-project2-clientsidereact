import React, { useState } from 'react';
import './App.css';
import CharacterDetails from './CharacterDetails';

function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!character) {
    return null; 
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <h2>{character.name}</h2>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <CharacterDetails id={character.id} />}
    </div>
  );
}

export default CharacterCard;
