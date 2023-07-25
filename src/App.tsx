import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Theater from "./components/Theater";
import FilterMenu from "./components/Filter";
import MovieDB from "./mocks/MovieDB.json";
import { MovieAPIProps, TheaterProps } from "./types";

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
      <div id="footer">
        <span className="TMDB-text">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </span>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
