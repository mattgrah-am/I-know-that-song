import { createContext } from "react";

export interface DataContext {
  artistData: [number, ArtistData[], string];
  setArtistData: (artistData: [number, ArtistData[], string]) => void;
  questionPosition: number;
  setQuestionPosition: (questionPosition: number) => void;
  score: number;
  setScore: (score: number) => void;
  artist: string;
  setArtist: (artist: string) => void;
}
export interface ArtistData {
  options: string[];
  correct: CorrectSongDetails;
}

interface CorrectSongDetails {
  song: string;
  preview: string;
  image: string;
}

export const ArtistDataContext = createContext<DataContext>({
  artistData: [0, [], ""],
  setArtistData: () => {},
  questionPosition: 0,
  setQuestionPosition: () => {},
  score: 0,
  setScore: () => {},
  artist: "string",
  setArtist: () => {},
});
