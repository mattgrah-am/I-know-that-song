import { createContext } from "react";
export interface DataContext {
  artistData: ArtistData;
  setArtistData: (artistData: ArtistData) => void;
  questionPosition: number;
  setQuestionPosition: (questionPosition: number) => void;
  score: number;
  setScore: (score: number) => void;
  artist: string;
  setArtist: (artist: string) => void;
}
export interface ArtistData {
  name: string;
  trackData: TrackData[];
  trackPreviewCount: number;
}

interface TrackData {
  options: string[];
  correct: CorrectSongDetails;
}

interface CorrectSongDetails {
  song: string;
  preview: string;
  image: string;
}

export const ArtistDataContext = createContext<DataContext>({
  artistData: {
    name: "",
    trackData: [
      {
        options: [],
        correct: { song: "", preview: "", image: "" },
      },
    ],
    trackPreviewCount: 0,
  },
  setArtistData: () => {},
  questionPosition: 0,
  setQuestionPosition: () => {},
  score: 0,
  setScore: () => {},
  artist: "string",
  setArtist: () => {},
});
