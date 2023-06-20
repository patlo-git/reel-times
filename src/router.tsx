import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/theaters", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_TOKEN,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .then(() => console.log("/ called from router"))
    .catch((err) => console.error(err));
});

export default router;
