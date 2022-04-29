import { Card, Link, Modal } from "@mui/material";
import { useState } from "react";
import spotifyLogo from "../img/Spotify_Logo_RGB_Black.png";

export const AboutModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const websiteLinks = [
    {
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      name: "Typescript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Material UI",
      url: "https://mui.com/",
    },
    {
      name: "Express JS",
      url: "https://expressjs.com/",
    },
    {
      name: "Node JS",
      url: "https://nodejs.org/en/",
    },
  ];

  const mattsLinks = [
    {
      name: "Website",
      url: "https://www.mattgrah.am",
    },
    {
      name: "Github",
      url: "https://github.com/mattgrah-am",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mattgrah_am",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mattgrah-am/",
    },
  ];

  return (
    <div>
      <small>
        <Link underline="hover" onClick={handleOpen}>
          Learn more about this web app.
        </Link>
      </small>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          variant="outlined"
          className="modal-style"
          style={{ paddingBottom: "2em" }}
        >
          <h2
            id="modal-modal-title"
            className="logo"
            style={{
              margin: "0.25em 0 0",
              textAlign: "left",
              paddingLeft: 0,
              fontSize: "3.6em",
            }}
          >
            I KNOW THAT SONG
          </h2>
          <p id="modal-modal-description">
            Was created as part of{" "}
            <Link
              href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              General Assembly's Software Engineering Immersive Online (Flex)
            </Link>
            course's final project. It uses{" "}
            {websiteLinks.map((link) => (
              <>
                <Link
                  underline="hover"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </Link>
                {", "}
              </>
            ))}{" "}
            & the{" "}
            <Link
              href="https://developer.spotify.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              <img src={spotifyLogo} className="spotify-logo" alt="" /> API.
            </Link>{" "}
            You can learn more and review the full soruce code on{" "}
            <Link
              href="https://github.com/mattgrah-am/I-know-that-song"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              Github
            </Link>
            .
          </p>
          <p>
            The aim of the game is to allow the end user to search for a artist
            / band, which in turn generates a set of multiple choice questions
            where the end user is to guess the song whilst a short 30sec music
            clip is played. If the user guesses correctly the name of the song
            is highlighted green, if the user selects incorrectly the name of
            the selected guess is highlighted red.
          </p>
          <hr />
          <h3 style={{ margin: "0.5em 0" }}>Learn more about the creator.</h3>
          {mattsLinks.map((link) => (
            <>
              <Link
                underline="hover"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </Link>
              {" | "}
            </>
          ))}
          <Link
            underline="hover"
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%69%61%6D%40%6D%61%74%74%67%72%61%68%2E%61%6D?subject=Mail from www.mattgrah.am"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </Link>
        </Card>
      </Modal>
    </div>
  );
};
