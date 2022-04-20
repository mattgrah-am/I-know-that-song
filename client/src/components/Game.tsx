import { Card, CircularProgress, Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";
import { DetailCatcher } from "./DetailCatcher";

export const Game = () => {
  const { artistData } = useContext<any>(ArtistDataContext);
  if (artistData[1] && artistData[0] < 5)
    return (
      <>
        <Container>
          <p>
            Not enough playable tracks. Please select another Artist / Band:
          </p>
        </Container>
        <DetailCatcher />
      </>
    );

  return (
    <Container>
      {artistData.length === 0 && <CircularProgress />}
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
