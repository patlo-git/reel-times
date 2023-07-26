import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Theater from "./components/Theater";
import FilterMenu from "./components/Filter";
import MovieDB from "./mocks/MovieDB.json";
import { MovieAPIProps, TheaterProps } from "./types";
import { blueLong } from "./assets";

const App = () => {
  const movieAPIData: MovieAPIProps[] = MovieDB;

  const theaterData: TheaterProps[] = movieAPIData.map(
    ({
      tmsId,
      rootId,
      title,
      releaseDate,
      releaseYear,
      titleLang,
      genres,
      shortDescription,
      topCast,
      directors,
      officialUrl,
      ratings,
      runTime,
      showtimes,
    }) => ({
      tmsId,
      rootId,
      title,
      releaseDate,
      releaseYear,
      titleLang,
      genres,
      shortDescription,
      topCast,
      directors,
      officialUrl,
      ratings,
      runTime,
      showtimes,
    })
  );

  if (!movieAPIData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Theater movies={theaterData} />
      <FilterMenu />
      <div id="footer-wrapper">
        <div className="footer-container">
          <span className="TMDB-text">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </span>
          <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
            <img className="TMDB-logo" src={blueLong} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
