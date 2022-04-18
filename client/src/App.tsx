import { Paper } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
        <Paper elevation={6} sx={{ minWidth: 640, opacity: 0.9 }}>
          <Header />
          <ArtistDataContext.Provider value={{ artistData, setArtistData }}>
            <Routes>
              <Route path="/" element={<DetailCatcher />} />
              <Route path="/play" element={<Game />} />
            </Routes>
          </ArtistDataContext.Provider>
          <Footer />
        </Paper>
      </Router>
    </div>
  );
}

export default App;
