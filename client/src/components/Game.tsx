import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";
import { GameOver } from "./GameOver";
import { NotEnoughTracks } from "./NotEnoughTracks";
import { Questions } from "./Questions";

export const Game = () => {
  const { artistData, questionPosition } = useContext<any>(ArtistDataContext);

  if (artistData[1] && artistData[0] < 3) return <NotEnoughTracks />;

  return (
    <>{questionPosition === artistData[0] ? <GameOver /> : <Questions />}</>
  );
};
