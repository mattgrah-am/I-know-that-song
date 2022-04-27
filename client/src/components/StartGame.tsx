import { Container } from "@mui/material";
import { DetailCatcher } from "./DetailCatcher";

export const StartGame = () => {
  return (
    <Container>
      <h3 style={{ textAlign: "left", margin: 0 }}>Getting Started:</h3>
      <p style={{ textAlign: "left", marginTop: "0.5em" }}>
        Search for an artist / band below with three or more characters, click
        on your preferred option to begin.
      </p>
      <DetailCatcher />
    </Container>
  );
};
