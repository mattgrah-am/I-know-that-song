import { resolve } from "path";

const axios = require("axios");
const qs = require("qs");
require("dotenv").config();

interface ArtistData {
  song: string;
  preview: string;
  image: string;
}

interface Tracks {
  name: string;
  preview_url: string;
  album: { images: { url: string } };
}

const client_id = process.env.SPOTIFY_API_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  "utf-8"
).toString("base64");

const getAuth = async () => {
  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getArtistList = async (artist: string) => {
  const access_token = await getAuth();
  if (artist.length >= 3) {
    try {
      const artistIdUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=5`;
      const response = await axios.get(artistIdUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const artistList: any = [];
      response.data.artists.items.forEach((artist) => {
        artistList.push({ name: artist.name, image: artist.images[0].url });
      });
      return artistList;
    } catch (error) {
      console.log(error);
    }
  }
};

export const getArtistData = async (artist: string) => {
  const access_token = await getAuth();

  try {
    const artistIdUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=1`;
    const response = await axios.get(artistIdUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const artistId: string = response.data.artists.items[0].id;

    const artistDataUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=AU`;
    const res = await axios.get(artistDataUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const artistData: ArtistData[] = [];
    let trackPreviewCount: number = 0;

    res.data.tracks.forEach((track: Tracks) => {
      artistData.push({
        song: track.name,
        preview: track.preview_url,
        image: track.album.images[0].url,
      });
      if (track.preview_url) trackPreviewCount++;
    });
    return [trackPreviewCount, artistData];
  } catch (error) {
    console.log(error);
  }
};
