import { Container, Link as MaterialLink } from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArtistDataContext } from "../Context/artistDataContext";

export const GameOver = () => {
  const { setQuestionPosition } = useContext<any>(ArtistDataContext);

  return (
    <Container>
      <h3>
        Game over.{" "}
        <MaterialLink
          component={RouterLink}
          to="/"
          onClick={setQuestionPosition(0)}
        >
          Play again?
        </MaterialLink>
      </h3>
    </Container>
  );
};
