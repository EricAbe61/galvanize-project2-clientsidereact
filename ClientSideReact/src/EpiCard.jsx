
function EpisodeCard({ episode }) {
  return (
    <div className="episode-card">
      <h3>{episode.name}</h3>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
    </div>
  );
}

export default EpisodeCard;