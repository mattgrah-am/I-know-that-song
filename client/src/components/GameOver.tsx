import { Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext, DataContext } from "../Context/artistDataContext";
import { DetailCatcher } from "./DetailCatcher";

export const GameOver = () => {
  const { score, artistData } = useContext<DataContext>(ArtistDataContext);

  return (
    <Container>
      <h3>
        <>
          You scored {score} out of {artistData[0]} for {artistData[2]}.
        </>
      </h3>
      <p>Play again?</p>
      <DetailCatcher />
    </Container>
  );
};
