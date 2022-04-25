import { Card, CircularProgress, Container, TextField } from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ArtistDataContext } from "../Context/artistDataContext";

export const DetailCatcher = () => {
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
        onChange={(e) => {
          setArtist(e.target.value);
          artist.length >= 3 && getArtisList();
        }}
      />
      {artist.length < 3 && artist.length >= 1 && (
        <CircularProgress sx={{ padding: "2em 0" }} />
      )}
      {artist.length >= 3 &&
        artistList.map((artist: any, index: number) => (
          <Link
            to="/play"
            key={index}
            onClick={async () => {
              await axios
                .get(`http://localhost:3333/api/data/${artist.name}`)
                .then((response) => {
                  setArtistData(response.data);
                });
            }}
          >
            <Card variant="outlined" className="artist-search">
              <img src={artist.image} alt="" className="album-art" />
              <h2>{artist.name}</h2>
            </Card>
          </Link>
        ))}
    </Container>
  );
};
