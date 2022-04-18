import { Card, Container, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const DetailCatcher = () => {
  const [player, setPlayer] = useState("");
  const [artist, setArtist] = useState<any>("");
  const [artistList, setArtistList] = useState<string[]>([]);
  const { setArtistData } = useContext<any>(ArtistDataContext);

  const getArtisList = () => {
    if (artist.length >= 3) {
      axios
        .get(`http://localhost:3333/api/search/${artist}`)
        .then((response) => {
          setArtistList([...response.data]);
        });
    }
  };

  return (
    <Container>
      <TextField
        margin="dense"
        required
        fullWidth
        id="artist"
        label="Enter Artist / Band"
        name="name"
        variant="outlined"
        autoFocus
        value={artist}
        onChange={(e) => {
          setArtist(e.target.value);
          artist.length >= 3 && getArtisList();
        }}
      />

      {artistList.map((artist: any) => (
        <Card
          variant="outlined"
          className="artist-search"
          onClick={() => {
            axios
              .get(`http://localhost:3333/api/data/${artist.name}`)
              .then((response) => {
                setArtistData(response.data);
              });
          }}
        >
          <img src={artist.image} alt="" className="album-art" />
          <h2>{artist.name}</h2>
        </Card>
      ))}
    </Container>
  );
};
