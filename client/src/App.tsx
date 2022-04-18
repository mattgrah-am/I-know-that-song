import { Paper } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { DetailCatcher } from "./components/DetailCatcher";
import { Footer } from "./components/Footer";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { ArtistDataContext } from "./Context/artistDataContext";

function App() {
  const [artistData, setArtistData] = useState<any>([]);

  return (
    <div className="App">
      <Paper elevation={6} sx={{ minWidth: 640, opacity: 0.9 }}>
        <Header />
        <ArtistDataContext.Provider value={{ artistData, setArtistData }}>
          {artistData.length > 0 ? <Game /> : <DetailCatcher />}
        </ArtistDataContext.Provider>
        <Footer />
      </Paper>
    </div>
  );
}

export default App;
