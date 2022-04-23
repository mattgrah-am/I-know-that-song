import { Card, CircularProgress, Container } from "@mui/material";
import { useContext } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";
import { DetailCatcher } from "./DetailCatcher";

interface QuestionData {
  options: string[];
  correct: {
    song: string;
    preview: string;
    image: string;
  };
}
interface ArtistData {
  song: string;
  preview: string;
  image: string;
}

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
      {artistData[1].length === 0 && <CircularProgress />}
      {artistData[1] &&
        artistData[1].map(
          (track: any, index: number) =>
            track.correct.preview && (
              <Card variant="outlined" key={index}>
                <img src={track.correct.image} alt="" className="album-art" />
                <h2>{artistData[2]}</h2>
                <div>
                  {track.options.map((song: string, index: number) => (
                    <Card key={index}>{song}</Card>
                  ))}

                  <audio controls>
                    <source src={track.correct.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </Card>
            )
        )}
    </Container>
  );
};
