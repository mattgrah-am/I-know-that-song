if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Request, Response } from "express";
import path from "path";
import { getArtistData, getArtistList } from "./spotify";

const PORT =
  process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3333;

const cors = require("cors");
const app = express();
app.use(cors());
app.set("trust proxy", 1);
app.use(express.json()); // support json encoded bodies

app.get(
  "/api/data/:artist",
  (req: Request<any, any, any, any>, res: Response<any>) => {
    getArtistData(req.params.artist).then((tracks) => {
      res.json(tracks);
    });
  }
);

app.get(
  "/api/search/:artist",
  (req: Request<any, any, any, any>, res: Response<any>) => {
    getArtistList(req.params.artist).then((artists) => {
      res.json(artists);
    });
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("/*", (req: Request<any, any, any, any>, res: Response<any>) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(+PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
