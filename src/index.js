import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavoriteProvider } from "./FavoriteContext";
import { SearchProvider } from "./SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FavoriteProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </FavoriteProvider>
);
