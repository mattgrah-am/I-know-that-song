import { useContext } from "react";
import { ArtistDataContext, DataContext } from "../Context/artistDataContext";
import { GameOver } from "./GameOver";
import { NotEnoughTracks } from "./NotEnoughTracks";
import { Questions } from "./Questions";

export const Game = () => {
  const { artistData, questionPosition } =
    useContext<DataContext>(ArtistDataContext);

  if (artistData.trackData && artistData.trackPreviewCount < 3)
    return <NotEnoughTracks />;

  return (
    <>
      {questionPosition === artistData.trackPreviewCount ? (
        <GameOver />
      ) : (
        <Questions />
      )}
    </>
  );
};
