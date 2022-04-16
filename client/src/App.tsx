import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { DetailCatcher } from "./components/DetailCatcher";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getToken, getTracks } from "./components/spotifyApi";

function App() {
  const [songs, setSongs] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const accessToken = await getToken();
      const data = await getTracks(accessToken);
      console.log(data);
      data.map((track: any) => {
        return setSongs((songs: any) => [
          ...songs,
          {
            song: track.name,
            preview: track.preview_url,
          },
        ]);
      }, []);
    };

    getData();
  });

  return (
    <div className="App">
      <Card sx={{ minWidth: 640, minHeight: 640, opacity: 0.85 }}>
        <Header />
        <DetailCatcher />
        <Footer />
        {songs.map((track: any) => (
          <p>
            Song: {track.song}, Preview: {track.preview}
          </p>
        ))}
      </Card>
    </div>
  );
}

export default App;
