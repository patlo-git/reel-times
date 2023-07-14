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
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
