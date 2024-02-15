import anotherLoveImg from "./assets/img/another-love.jpg";
import parsehImg from "./assets/img/parseh.jpg";
import memoriesImg from "./assets/img/memories.jpg";

import anotherLoveSong from "./assets/musics/another-love.mp3";
import parsehSong from "./assets/musics/parseh.mp3";
import memoriesSong from "./assets/musics/memories.mp3";

const musics = [
  {
    id: 1,
    name: "Another Love",
    artist: "Tom Odell",
    duration: "4:10",
    image: anotherLoveImg,
    songUrl: anotherLoveSong,
  },
  {
    id: 2,
    name: "Parseh",
    artist: "Baran",
    duration: "3:19",
    image: parsehImg,
    songUrl: parsehSong,
  },
  {
    id: 2,
    name: "Memories",
    artist: "VOJ",
    duration: "3:56",
    image: memoriesImg,
    songUrl: memoriesSong,
  },
];

export default musics;
