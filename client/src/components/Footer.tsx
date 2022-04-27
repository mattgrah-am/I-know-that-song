import { Container, Link } from "@mui/material";
import spotifyLogo from "../img/Spotify_Logo_RGB_Black.png";
import { AboutModal } from "./AboutModal";

export const Footer = () => {
  return (
    <Container className="footer">
      <small>
        Created with 🖤 by&nbsp;
        <Link
          href="https://www.mattgrah.am"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          mattgrah.am
        </Link>
        &nbsp;using&nbsp;
        <Link
          href="https://developer.spotify.com/"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <img src={spotifyLogo} className="spotify-logo" alt="" />
        </Link>
        <sup>API</sup>.&nbsp;
        <AboutModal />
      </small>
    </Container>
  );
};
