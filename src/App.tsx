import { createRoot } from "react-dom/client";
import Header from "./Header";
import Theater from "./Theater";
import FilterMenu from "./Filter";

const App = () => {
  return (
    <>
      <Header />
      <Theater />
      <FilterMenu />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
