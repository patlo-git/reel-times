import { createRoot } from "react-dom/client";
import Header from "./Header";
import Theater from "./Theater";

const App = () => {
  return (
    <>
      <Header />
      <Theater />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
