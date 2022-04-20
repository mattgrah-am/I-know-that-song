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
  const questionData: QuestionData[] = [];

  if (artistData[1]) {
    artistData[1].forEach((track: ArtistData) => {
      if (track.preview) {
        let songList = { ...artistData[2] };
        if (songList.hasOwnProperty(track.song)) {
          delete songList[track.song];
        }
        const songOptions: string[] = [track.song];
        let keys = Object.keys(songList);
        for (let i = 3; i > 0; i--) {
          // need to fix bug where only 3 songs get picked.
          let randomSong = keys[Math.floor(Math.random() * keys.length)];
          console.log(randomSong);
          if (songList.hasOwnProperty(randomSong)) {
            songOptions.push(randomSong);
            delete songList[randomSong];
            console.log(songList);
          }
        }

        questionData.push({
          options: [...songOptions],
          correct: {
            song: track.song,
            preview: track.preview,
            image: track.image,
          },
        });
        songList = { ...artistData[2] };
      }
    });
  }

  console.log(questionData);

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
      {questionData.length === 0 && <CircularProgress />}
      {questionData &&
        questionData.map((track: any, index: number) => (
          <Card variant="outlined" key={index}>
            <img src={track.correct.image} alt="" className="album-art" />
            <h2>Artist Name Here</h2>
            <div>
              <ul>
                {track.options.map((song: string, index: number) => (
                  <li key={index}>{song}</li>
                ))}
              </ul>
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
