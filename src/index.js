import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavoriteProvider } from "./FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <FavoriteProvider>
    <App />
  </FavoriteProvider>
  );
