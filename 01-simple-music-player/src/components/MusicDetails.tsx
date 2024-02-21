interface MusicDetailsProps {
  music: {
    image: string;
    name: string;
    artist: string;
    duration: string;
  };
  isPlaying: boolean;
}

const MusicDetails: React.FC<MusicDetailsProps> = ({ music, isPlaying }) => {
  return (
    <div>
      <div className={isPlaying ? 'music-image playing' : 'music-image'}>
        <img src={music.image} alt="music" />
      </div>

      <div className="music-details">
        <h3 className="music-name">{music.name}</h3>
        <p className="music-artist">{music.artist}</p>
        <span className="music-duration">{music.duration}</span>
      </div>
    </div>
  );
};

export default MusicDetails;
