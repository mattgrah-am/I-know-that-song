import { Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";
import { DetailCatcher } from "./DetailCatcher";

export const NotEnoughTracks = () => {
  const { artistData } = useContext<any>(ArtistDataContext);

  return (
    <Container>
      <p style={{ textAlign: "left" }}>
        Unfortunately <strong>{artistData[2]}</strong> does not have enough
        playable preview tracks on Spotify to play this game. Please select
        another Artist or Band:
      </p>
      <DetailCatcher />
    </Container>
  );
};
