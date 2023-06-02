import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Theater from "./components/Theater";
import FilterMenu from "./components/Filter";

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
