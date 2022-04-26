import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const Answer = (props: any) => {
  const { questionPosition, setQuestionPosition, score, setScore } =
    useContext<any>(ArtistDataContext);
  const [questionColor, setQuestionColor] = useState("question-background");
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      variant="outlined"
      className={questionColor}
      disabled={disabled}
      sx={{
        backgroundColor: questionColor,
        fontWeight: "bold",
      }}
      onClick={() => {
        props.song === props.correctSong && setScore(score + 1);
        props.song === props.correctSong &&
          setQuestionColor("correct-background");

        props.song !== props.correctSong &&
          setQuestionColor("incorrect-background");

        setDisabled(true);
        setTimeout(() => {
          setQuestionPosition(questionPosition + 1);
        }, 2000);
      }}
    >
      {props.song}
    </Button>
  );
};
