import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const Game = () => {
  const { artistData } = useContext<any>(ArtistDataContext);
  return artistData.map((track: any) => (
    <div>
      <p>{track.song}</p>
      <img src={track.image} alt="" className="album-art" />
      {track.preview && (
        <audio controls>
          <source src={track.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  ));
};
