import { useState, useEffect } from "react";
import axios from "axios";

const getMovieData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    requestMovies();
  }, []);

  async function requestMovies() {
    const options = {
      method: "GET",
      url: "http://localhost:3001/api/theaters",
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data.results[0].title);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }
  return data;
};

export default getMovieData;
