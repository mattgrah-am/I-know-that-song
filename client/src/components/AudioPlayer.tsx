import { useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ArtistDataContext } from "../Context/artistDataContext";

export const AudioPlayer = () => {
  const { artistData, questionPosition } = useContext<any>(ArtistDataContext);

  return (
    <ReactAudioPlayer
      autoPlay
      src={artistData[1][questionPosition].correct.preview}
      volume={0.3}
      controls={true}
    />
  );
};