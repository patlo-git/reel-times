import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/theaters", (req, res) => {
  const options = {
    method: "GET",
    url: `http://data.tmsapi.com/v1.1/movies/showings?startDate=2023-06-21&zip=93109&api_key=${process.env.GRACENOTE_API_KEY}`,
    headers: {
      accept: "application/json",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.log(response.data);
    })
    .then(() => console.log("/ called from router"))
    .catch((err) => console.error(err));
});

export default router;
