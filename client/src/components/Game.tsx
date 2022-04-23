import { Card, CircularProgress, Container } from "@mui/material";
import { useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ArtistDataContext } from "../Context/artistDataContext";
import { Answer } from "./Answer";
import { DetailCatcher } from "./DetailCatcher";

export const Game = () => {
  const { artistData, questionPosition } = useContext<any>(ArtistDataContext);

  if (artistData[1] && artistData[0] < 5)
    return (
      <>
        <Container>
          <p>
            Not enough playable tracks. Please select another Artist or Band:
          </p>
        </Container>
        <DetailCatcher />
      </>
    );

  return (
    <Container>
      {artistData.length === 0 && <CircularProgress />}
      {artistData[1] && artistData[1][questionPosition].correct.preview && (
        <Card variant="outlined" key={questionPosition}>
          <div className="game-header">
            <img
              src={artistData[1][questionPosition].correct.image}
              alt=""
              className="album-art"
            />
            <div>
              <h2 className="artist">{artistData[2]}</h2>
              <h3>
                Guess the Song: Round {questionPosition + 1} / {artistData[0]}
              </h3>
            </div>
          </div>

          <div>
            {artistData[1][questionPosition].options.map((song: string) => (
              <Answer
                song={song}
                correctSong={artistData[1][questionPosition].correct.song}
                questionPosition={questionPosition}
              />
            ))}

            <ReactAudioPlayer
              src={artistData[1][questionPosition].correct.preview}
              controls={false}
              autoPlay
              volume={0.3}
            />
          </div>
        </Card>
      )}
    </Container>
  );
};
