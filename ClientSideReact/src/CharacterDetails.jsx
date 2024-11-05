import { useState, useEffect } from 'react';

function details({ id }) {
  const [details, setDetails] = useState(null);

 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacterList(data.results))
      .catch(error => console.error('Error fetching data:', error)); 
  }, []);

  return (
    <div className="Character Details">
      <h2>{`${details.name.toUpperCase()}:`}</h2>
      <p>Type: {details.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p>Abilities: {details.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
    </div>
  );
}

export default CharacterDetails;
