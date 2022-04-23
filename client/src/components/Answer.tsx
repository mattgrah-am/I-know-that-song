import { Card } from "@mui/material";
import { useContext, useState } from "react";
import { ArtistDataContext } from "../Context/artistDataContext";

export const Answer = (props: any) => {
  const { questionPosition, setQuestionPosition } =
    useContext<any>(ArtistDataContext);
  const [questionColor, setQuestionColor] = useState("question-background");

  return (
    <Card
      variant="outlined"
      className={questionColor}
      sx={{ backgroundColor: questionColor }}
      onClick={() => {
        props.song === props.correctSong
          ? setQuestionColor("correct-background")
          : setQuestionColor("incorrect-background");

        setTimeout(() => {
          setQuestionPosition(questionPosition + 1);
        }, 3000);
      }}
    >
      {props.song}
    </Card>
  );
};
