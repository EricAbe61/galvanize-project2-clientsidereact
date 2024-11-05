import { useState, useEffect } from 'react';
import './App.css';

function CharacterDetails({ id }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setDetails(data))
        .catch(error => console.error('Error fetching character details:', error));
    }
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-details">
      <p>Status: {details.status}</p>
      <p>Species: {details.species}</p>
      <p>Origin: {details.origin.name}</p>
    </div>
  );
}

export default CharacterDetails;

