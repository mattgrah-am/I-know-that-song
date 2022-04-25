import { ArtistDataContext } from "../Context/artistDataContext";
import { Answer } from "./Answer";
import { Card } from "@mui/material";
import { useContext } from "react";
import { AudioPlayer } from "./AudioPlayer";

export const Questions = () => {
  const { artistData, questionPosition } = useContext<any>(ArtistDataContext);

  return (
    artistData[1] &&
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
            Guess the Song: Round {questionPosition + 1} / {artistData[0]}
          </h2>
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
        </div>
      </Card>
    )
  );
};
