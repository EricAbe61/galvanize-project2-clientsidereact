// import { useState } from 'react';
// import EpisodeDetails from './EpiDetails';

// function EpisodeCard({ episode }) {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="episode-card">
//       <h2>{episode.name}</h2>
//       <button onClick={toggleDetails}>
//         {showDetails ? 'Hide Details' : 'Show Details'}
//       </button>
//       {showDetails && <EpisodeDetails id={episode.id} />}
//     </div>
//   );
// // }

// export default EpisodeCard;

import { useState } from 'react';
import EpisodeCharacters from './EpiCharacters';
import EpisodeDetails from './EpiDetails';

function EpisodeCard({ episode }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  return (
    <div className="episode-card">
      <h3>{episode.name}</h3>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
          <button onClick={toggleCharacters}>
            {showCharacters ? 'Hide Characters' : 'Show Characters'}
          </button>
          {showCharacters && <EpisodeCharacters id={episode.id} />}
        </div>
      )}
    </div>
  );
}

export default EpisodeCard;
