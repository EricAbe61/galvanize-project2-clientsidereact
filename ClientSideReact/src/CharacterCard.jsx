// import React, { useState, useEffect } from 'react';
// import './App.css';

// function CharacterCard({ id }) {
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`https://rickandmortyapi.com/api/character`)
//         .then(response => response.json())
//         .then(data => setDetails(data))
//         .catch(error => console.error('Error fetching character details:', error));
//     }
//   }, [id]);

//   if (!details) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="character-card">
//       <img src={details.image} alt={`${details.name}`} className="character-image" />
//       <div className="character-details">
//         <h2>{details.name}</h2>
//         <p>Status: {details.status}</p>
//         <p>Species: {details.species}</p>
//         <p>Origin: {details.origin.name}</p>
//       </div>
//     </div>
//   );
// }

// export default CharacterCard;

import React, { useState, useEffect } from 'react';
import './App.css';

function CharacterCard({ id }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('Character data:', data); // Log response to check if it’s correct
          setDetails(data);
        })
        .catch(error => console.error('Error fetching character details:', error));
    }
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-card">
      <img src={details.image} alt={details.name} className="character-image" />
      <div className="character-details">
        <h2>{details.name}</h2>
        <p>Status: {details.status}</p>
        <p>Species: {details.species}</p>
        <p>Origin: {details.origin.name}</p>
      </div>
    </div>
  );
}

export default CharacterCard;

