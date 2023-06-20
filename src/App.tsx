import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Theater from "./components/Theater";
import FilterMenu from "./components/Filter";
import { MOVIESINFO } from "./mocks/MovieDB";
import getMovieData from "./components/MovieData";

const App = () => {
  return (
    <>
      <Header />
      <Theater movies={MOVIESINFO} data={getMovieData()} />
      <FilterMenu />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
