import { useContext, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ArtistDataContext, DataContext } from "../Context/artistDataContext";

export const AudioPlayer = () => {
  const { artistData, questionPosition } =
    useContext<DataContext>(ArtistDataContext);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  setTimeout(() => setAutoPlay(true), 1000);
  return (
    <ReactAudioPlayer
      autoPlay={autoPlay}
      src={artistData.trackData[questionPosition].correct.preview}
      volume={0.3}
      controls={true}
    />
  );
};
