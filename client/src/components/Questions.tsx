import { ArtistDataContext } from "../Context/artistDataContext";
import { Answer } from "./Answer";
import { Card, CircularProgress, Stack } from "@mui/material";
import { useContext } from "react";
import { AudioPlayer } from "./AudioPlayer";

export const Questions = () => {
  const { artist, artistData, questionPosition } =
    useContext<any>(ArtistDataContext);

  if (artist !== artistData[2]) {
    return <CircularProgress />;
  }

  return (
    artist === artistData[2] &&
    artistData[1][questionPosition].correct.preview && (
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
              {" "}
              Round {questionPosition + 1} / {artistData[0]}
            </span>
          </h2>
          <Stack spacing={1} sx={{ margin: "0.75em" }}>
            {artistData[1][questionPosition].options.map(
              (song: string, index: number) => (
                <Answer
                  key={index}
                  song={song}
                  correctSong={artistData[1][questionPosition].correct.song}
                  questionPosition={questionPosition}
                />
              )
            )}
          </Stack>
        </div>
      </Card>
    )
  );
};
