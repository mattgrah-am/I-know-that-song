import { Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const DetailCatcher = () => {
  const [player, setPlayer] = useState("Dave Grohl");
  const [artist, setArtist] = useState("Foo Fighters");
  const { setArtistData } = useContext<any>(ArtistDataContext);

  return (
    <Container>
      <TextField
        margin="dense"
        required
        fullWidth
        id="name"
        label="Enter your name"
        name="name"
        variant="outlined"
        autoFocus
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />
      <TextField
        margin="dense"
        required
        fullWidth
        name="artist"
        label="Search Artist / Band"
        variant="outlined"
        id="arist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ my: 1, px: 4 }}
        onClick={() => {
          axios
            .get(`http://localhost:3333/api/data/${artist}`)
            .then((response) => {
              setArtistData(response.data);
            });
        }}
      >
        PLAY
      </Button>
    </Container>
  );
};
