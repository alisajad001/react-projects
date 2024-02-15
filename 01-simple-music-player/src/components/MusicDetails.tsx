const MusicDetails = ({ music }) => {
  return (
    <div>
      <div className="music-image">
        <img src={music.image} alt="music" />
      </div>

      <div className="music-details">
        <h3 className="music-name">{music.name}</h3>
        <p className="music-artist">{music.artist}l</p>
      </div>
    </div>
  );
};

export default MusicDetails;
