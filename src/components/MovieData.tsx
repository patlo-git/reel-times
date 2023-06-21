import { useState, useEffect } from "react";
import axios from "axios";

export interface MovieProps {
  id: string;
  title: string;
  releaseDate: string;
  language: string;
  genres?: string[];
  shortDescription: string;
  cast: string[];
  directors: string[];
  ratings: Rating[];
  runTime: string;
  projection?: string;
  audio?: string;
  review?: string;
  showtimes: ShowtimesProps[];
}

interface Rating {
  code: string;
}

export interface ShowtimesProps {
  theatre: TheaterProps;
  dateTime: string;
}

export interface TheaterProps {
  id: string;
  name: string;
}

const getMovieData = () => {
  const [data, setData] = useState<MovieProps[]>([]);

  useEffect(() => {
    requestMovies();
  }, []);

  async function requestMovies() {
    const options = {
      method: "GET",
      url: "http://localhost:3001/api/theaters",
    };

    await axios
      .request(options)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }
  return data;
};

export default getMovieData;
