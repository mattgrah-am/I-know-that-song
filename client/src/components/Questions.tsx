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

  if (artist !== artistData.name) {
    return <CircularProgress />;
  }

  return (
    <>
      {artist === artistData.name &&
        artistData.trackData[questionPosition].correct.preview && (
          <Container>
            <Card variant="outlined" key={questionPosition}>
              <div className="game-header">
                <img
                  src={artistData.trackData[questionPosition].correct.image}
                  alt=""
                  className="album-art"
                />
                <div>
                  <h2 className="artist">{artistData.name}</h2>
                  <AudioPlayer />
                </div>
              </div>

              <div>
                <h2 className="guess-round">
                  GUESS THE SONG:{" "}
                  <span className="round">
                    Round {questionPosition + 1} /{" "}
                    {artistData.trackPreviewCount}
                  </span>
                </h2>
                <Stack spacing={1} sx={{ margin: "0.75em" }}>
                  {artistData.trackData[questionPosition].options.map(
                    (song: string, index: number) => (
                      <Button
                        key={index}
                        className="question-background"
                        variant="outlined"
                        disabled={disabled}
                        onClick={(e) => {
                          const correctSong =
                            artistData.trackData[questionPosition].correct.song;
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
