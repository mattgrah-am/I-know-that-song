import { Card, Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const Game = () => {
  const { artistData } = useContext<any>(ArtistDataContext);
  if (artistData[1] && artistData[0] < 5)
    return <p>Not enough playable tracks</p>;
  return (
    <Container>
      {artistData[1] &&
        artistData[1].map((track: any, index: number) => (
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
