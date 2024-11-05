import { useState, useEffect } from 'react';
import EpisodeCharacters from './EpiCharacters';

function EpisodeDetails({ id }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => response.json())
        .then(data => setDetails(data))
        .catch(error => console.error('Error fetching episode details:', error));
    }
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="episode-details">
      <p>Air Date: {details.air_date}</p>
      <p>Episode: {details.episode}</p>
    </div>
  );
}

export default EpisodeDetails;

  