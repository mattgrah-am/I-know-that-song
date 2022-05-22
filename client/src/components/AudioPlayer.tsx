import { useContext, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ArtistDataContext, DataContext } from "../Context/artistDataContext";

export const AudioPlayer = () => {
  const { artistData, questionPosition } =
    useContext<DataContext>(ArtistDataContext);
  const [volume, setVolume] = useState<number>(0.5);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  setTimeout(() => setAutoPlay(true), 1000);
  const audio: any = document.getElementById("audio");
  return (
    <ReactAudioPlayer
      id="audio"
      autoPlay={autoPlay}
      src={artistData.trackData[questionPosition].correct.preview}
      controls={true}
      volume={volume}
      onVolumeChanged={() => setVolume(audio.volume)}
    />
  );
};
