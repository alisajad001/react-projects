import { useState, useRef } from 'react';
import MusicDetails from './MusicDetails';
import PlayerControls from './PlayerControls';
import musics from '../data';

const PlayerContainer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentMusic, setCurrentMusic] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    } else {
      setIsPlaying(true);
      if (audioRef.current) audioRef.current.play();
    }
  };

  const nextMusic = () => {
    if (currentMusic < 2) {
      setIsPlaying(true);
      setCurrentMusic(currentMusic + 1);
    } else {
      setCurrentMusic(0);
    }
  };

  const prevMusic = () => {
    if (currentMusic > 0) {
      setCurrentMusic(currentMusic - 1);
    } else {
      setIsPlaying(true);
      setCurrentMusic(2);
    }
  };

  return (
    <div className="player-container">
      <h2>Now Playing</h2>
      <audio
        src={`${musics[currentMusic].songUrl}`}
        controls={true}
        autoPlay
        ref={audioRef}
      />

      <MusicDetails music={musics[currentMusic]} isPlaying={isPlaying} />
      <PlayerControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        nextMusic={nextMusic}
        prevMusic={prevMusic}
        audioRef={audioRef}
      />
    </div>
  );
};

export default PlayerContainer;
