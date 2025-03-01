import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
import SEO from "../SEO.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SEO />
    <App />
  </StrictMode>
);
