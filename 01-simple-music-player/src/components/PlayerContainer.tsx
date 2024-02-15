import { useState, useRef } from "react";
import MusicDetails from "./MusicDetails";
import PlayerControls from "./PlayerControls";
import musics from "../data";

const PlayerContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);
  const audioRef = useRef();

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const nextMusic = () => {
    if (currentMusic < 2) {
      setCurrentMusic(currentMusic + 1);
    } else {
      setCurrentMusic(0);
    }
  };

  const prevMusic = () => {
    if (currentMusic > 0) {
      setCurrentMusic(currentMusic - 1);
    } else {
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

      <MusicDetails />
      <PlayerControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        nextMusic={nextMusic}
        prevMusic={prevMusic}
      />
    </div>
  );
};

export default PlayerContainer;
