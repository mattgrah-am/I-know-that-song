import { ArtistDataContext, DataContext } from "../Context/artistDataContext";
import {
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";

export const Questions = () => {
  const {
    artist,
    artistData,
    questionPosition,
    setQuestionPosition,
    score,
    setScore,
  } = useContext<DataContext>(ArtistDataContext);
  const [disabled, setDisabled] = useState(false);

  if (artist !== artistData[2]) {
    return <CircularProgress />;
  }

  return (
    <>
      {artist === artistData[2] &&
        artistData[1][questionPosition].correct.preview && (
          <Container>
            <Card variant="outlined" key={questionPosition}>
              <div className="game-header">
                <img
                  src={artistData[1][questionPosition].correct.image}
                  alt=""
                  className="album-art"
                />
                <div>
                  <h2 className="artist">{artistData[2]}</h2>
                  <AudioPlayer />
                </div>
              </div>

              <div>
                <h2 className="guess-round">
                  GUESS THE SONG:{" "}
                  <span className="round">
                    Round {questionPosition + 1} / {artistData[0]}
                  </span>
                </h2>
                <Stack spacing={1} sx={{ margin: "0.75em" }}>
                  {artistData[1][questionPosition].options.map(
                    (song: string, index: number) => (
                      <Button
                        key={index}
                        className="question-background"
                        variant="outlined"
                        disabled={disabled}
                        onClick={(e) => {
                          const correctSong =
                            artistData[1][questionPosition].correct.song;
                          song === correctSong && setScore(score + 1);
                          song === correctSong &&
                            (e.currentTarget.style.backgroundColor =
                              "rgba(46, 125, 50, 0.9) ") &&
                            (e.currentTarget.style.color = "#fff");

                          song !== correctSong &&
                            (e.currentTarget.style.backgroundColor =
                              "rgba(211, 47, 47, 0.9)") &&
                            (e.currentTarget.style.color = "#fff");

                          setDisabled(true);
                          setTimeout(() => {
                            setQuestionPosition(questionPosition + 1);
                            setDisabled(false);
                          }, 2000);
                        }}
                      >
                        {song}
                      </Button>
                    )
                  )}
                </Stack>
              </div>
            </Card>
          </Container>
        )}
    </>
  );
};
