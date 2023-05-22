import { render } from "react-dom";
import Movie from "./Movie";

const App = () => {
  return (
    <div>
      <h1>ReelTimes</h1>
      <Movie title="Movie 1" genre="action" />
      <Movie title="Movie 2" genre="drama" />
      <Movie title="Movie 3" genre="documentary" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
