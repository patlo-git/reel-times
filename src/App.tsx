import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Theater from "./components/Theater";
import FilterMenu from "./components/Filter";
import getMovieData from "./components/MovieData";

const App = () => {
  const movieData = getMovieData();

  return (
    <>
      <Header />
      <Theater movies={movieData} />
      <FilterMenu />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
