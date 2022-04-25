import { Container, Link } from "@mui/material";
import spotifyLogo from "../img/Spotify_Logo_RGB_Black.png";

export const Footer = () => {
  return (
    <Container className="footer">
      <small>
        Created with 🖤 by{" "}
        <Link
          href="https://www.mattgrah.am"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          mattgrah.am
        </Link>{" "}
        using{" "}
        <Link
          href="https://developer.spotify.com/"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <img src={spotifyLogo} className="spotify-logo" alt="" />
        </Link>
        <sup>API</sup>
      </small>
    </Container>
  );
};
