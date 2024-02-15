const PlayerContainer = () => {
  return (
    <div className="player-container">
      <h2>Now Playing</h2>

      <div className="music-image">
        <img src="https://picsum.photos/200" alt="music" />
      </div>

      <div className="music-details">
        <h3 className="music-name">Another Love</h3>
        <p className="music-artist">Tom Odell</p>
        <audio></audio>
      </div>

      <div className="player-controls">
        <div className="progress-bars">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
        </div>

        <div className="buttons">
          <button className="prev">
            <i className="fas fa-backward"></i>
          </button>
          <button className="play">
            <i className="fas fa-pause"></i>
          </button>
          <button className="next">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerContainer;
