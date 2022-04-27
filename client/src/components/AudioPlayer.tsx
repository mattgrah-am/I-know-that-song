import { useContext, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ArtistDataContext } from "../Context/artistDataContext";

export const AudioPlayer = () => {
  const { artistData, questionPosition } = useContext<any>(ArtistDataContext);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  setTimeout(() => setAutoPlay(true), 1000);
  return (
    <ReactAudioPlayer
      autoPlay={autoPlay}
      src={artistData[1][questionPosition].correct.preview}
      volume={0.3}
      controls={true}
    />
  );
};
