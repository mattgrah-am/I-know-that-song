import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { createTheme, Paper, ThemeProvider } from "@mui/material";
import { Footer } from "./components/Footer";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { ArtistDataContext } from "./Context/artistDataContext";
import { grey } from "@mui/material/colors";
import { StartGame } from "./components/StartGame";

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  const [artistData, setArtistData] = useState<any>([]);
  const [questionPosition, setQuestionPosition] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [artist, setArtist] = useState<any>("");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Paper
            elevation={6}
            sx={{ maxWidth: 480, opacity: 0.9, textAlign: "center" }}
          >
            <Header />
            <ArtistDataContext.Provider
              value={{
                artistData,
                setArtistData,
                questionPosition,
                setQuestionPosition,
                score,
                setScore,
                artist,
                setArtist,
              }}
            >
              <Routes>
                <Route path="/" element={<StartGame />} />
                <Route path="/play" element={<Game />} />
              </Routes>
            </ArtistDataContext.Provider>
            <Footer />
          </Paper>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
