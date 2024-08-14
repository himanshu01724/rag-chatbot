import { createRoot } from "react-dom/client";
import App from "./App";

const Container = document.getElementById("root");

if (!Container) {
  throw new Error("Root element not found");
}

const root = createRoot(Container);

root.render(<App />);
