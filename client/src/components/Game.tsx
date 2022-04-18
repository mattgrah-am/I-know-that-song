import { Card, Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const Game = () => {
  const { artistData } = useContext<any>(ArtistDataContext);
  return (
    <Container>
      {artistData.map((track: any, index: number) => (
        <Card variant="outlined" className="artist-search" key={index}>
          <img src={track.image} alt="" className="album-art" />
          <div>
            <p>{track.song}</p>
            {track.preview && (
              <audio controls>
                <source src={track.preview} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </Card>
      ))}
    </Container>
  );
};
