import { Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";
import { DetailCatcher } from "./DetailCatcher";

export const GameOver = () => {
  const { score, artistData } = useContext<any>(ArtistDataContext);

  return (
    <Container>
      <h3>
        {" "}
        You scored {score} out of {artistData[0]}. Play again?
      </h3>
      <DetailCatcher />
    </Container>
  );
};
