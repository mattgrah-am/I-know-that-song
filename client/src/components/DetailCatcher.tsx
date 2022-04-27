import {
  Card,
  CircularProgress,
  TextField,
  Link as MaterialLink,
} from "@mui/material";
import axios from "axios";
import { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArtistDataContext } from "../Context/artistDataContext";

export const DetailCatcher = () => {
  const [artistList, setArtistList] = useState<string[]>([]);
  const { setArtistData, setQuestionPosition, setScore, artist, setArtist } =
    useContext<any>(ArtistDataContext);

  const getArtisList = () => {
    axios.get(`api/search/${artist}`).then((response) => {
      setArtistList([...response.data]);
    });
  };

  return (
    <>
      <TextField
        margin="dense"
        required
        fullWidth
        id="artist"
        label="Search Artist / Band"
        name="name"
        variant="outlined"
        autoFocus
        onChange={(e) => {
          setArtist(e.target.value);
          artist.length >= 2 && getArtisList();
        }}
      />
      {artist.length < 2 && artist.length > 0 && (
        <CircularProgress sx={{ padding: "2em 0" }} />
      )}
      {artist.length >= 2 &&
        artistList.map((artist: any, index: number) => (
          <MaterialLink
            component={RouterLink}
            to="/play"
            underline="none"
            key={index}
            onClick={async () => {
              setQuestionPosition(0);
              setScore(0);
              await axios.get(`api/data/${artist.name}`).then((response) => {
                setArtistData(response.data);
                setArtist(artist.name);
              });
            }}
          >
            <Card variant="outlined" className="artist-search">
              <img src={artist.image} alt="" className="album-art" />
              <p className="artist-search-name">{artist.name}</p>
            </Card>
          </MaterialLink>
        ))}
    </>
  );
};
