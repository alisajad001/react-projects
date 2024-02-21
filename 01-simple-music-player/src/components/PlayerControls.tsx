import { useEffect, useState } from 'react';

interface PlayerControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  nextMusic: () => void;
  prevMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  togglePlay,
  nextMusic,
  prevMusic,
  audioRef,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const interval = setInterval(() => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime / audioRef.current.duration);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="player-controls">
      <div className="progress-bars">
        <div className="bar-1"></div>
        <div className="bar-2" style={{ width: `${progress * 100}%` }}></div>
      </div>

      <div className="buttons">
        <button className="prev" onClick={prevMusic}>
          <i className="fas fa-backward"></i>
        </button>
        <button className="play" onClick={togglePlay}>
          <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
        </button>
        <button className="next" onClick={nextMusic}>
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
