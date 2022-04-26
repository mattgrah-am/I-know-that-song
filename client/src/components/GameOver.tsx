import { Container } from "@mui/material";
import { DetailCatcher } from "./DetailCatcher";

export const GameOver = () => {
  return (
    <Container>
      <h3> Game over. Play again?</h3>
      <DetailCatcher />
    </Container>
  );
};
