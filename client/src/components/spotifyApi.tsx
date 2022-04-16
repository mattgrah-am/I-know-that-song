import { Buffer } from "buffer";

const clientId = "b4af616c411a4e24b40514c06291a5d0";
const clientSecret = "9858f8e737e843ee8c8b4b591dab7f60";

export const getToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "user-top-read",
    }),
  });
  const data = await res.json();
  return data.access_token;
};

export const getTracks = async (token: string) => {
  const res = await fetch(
    "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD/top-tracks?market=AU",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data.tracks;
};
