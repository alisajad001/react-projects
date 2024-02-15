const PlayerControls = ({ isPlaying, togglePlay, nextMusic, prevMusic }) => {
  return (
    <div className="player-controls">
      <div className="progress-bars">
        <div className="bar-1"></div>
        <div className="bar-2"></div>
      </div>

      <div className="buttons">
        <button className="prev" onClick={prevMusic}>
          <i className="fas fa-backward"></i>
        </button>
        <button className="play" onClick={togglePlay}>
          <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
        </button>
        <button className="next" onClick={nextMusic}>
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
