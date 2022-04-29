import { useContext } from "react";
import { ArtistDataContext, DataContext } from "../Context/artistDataContext";
import { GameOver } from "./GameOver";
import { NotEnoughTracks } from "./NotEnoughTracks";
import { Questions } from "./Questions";

export const Game = () => {
  const { artistData, questionPosition } =
    useContext<DataContext>(ArtistDataContext);

  if (artistData[1] && artistData[0] < 3) return <NotEnoughTracks />;

  return (
    <>{questionPosition === artistData[0] ? <GameOver /> : <Questions />}</>
  );
};
